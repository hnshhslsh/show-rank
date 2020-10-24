const ieee = {};

ieee.rankingSpanProvider = [];
ieee.loadMoreInited = false;
ieee.desktopLastIndex = -1;
ieee.mobileLastIndex = -1;

ieee.start = function(){
    let interval = setInterval(function(){
        if(!ieee.isLoading()){
            clearInterval(interval);
            // for desktop page select
            $("#xplMainContent > div.ng-SearchResults.row > div.main-section > xpl-paginator a").click(function(){
                ieee.desktopLastIndex = -1;
                ieee.mobileLastIndex = -1;
                ieee.start();
            });
            // for mobile loadmore
            if(!ieee.loadMoreInited) {
                ieee.loadMoreInited = true;
                $(".loadMore-btn").click(ieee.start);
            }
            ieee.addRankings();
        }
    }, 1000);
}

ieee.addRankings = function(){
    // for desktop
    $(".description > a").each(function(index){
        if(index > ieee.desktopLastIndex) {
            ieee.desktopLastIndex = index;
            ieee.addRanking($(this));
        }
    });
    // for mobile
    $(".description > div:nth-child(1) > a").each(function(index){
        if(index > ieee.mobileLastIndex) {
            ieee.mobileLastIndex = index;
            ieee.addRanking($(this));
        }
    });
}

ieee.isLoading = function() {
    return $('.List-results-message').text().trim() == "Getting results..."
        || $('xpl-progress-spinner').text().trim() == "Getting results..."
        || $(".loadMore-btn > span.fa-spinner").length == 1
}

ieee.addRanking = function(result) {
    let source = result.text().trim();
    if(source.length != 0){
        let names = ieee.parseNames(source);
        for(let getRankingSpan of ieee.rankingSpanProvider){
            result.before(getRankingSpan(names));
        }
    }
}

ieee.parseNames = function(source){
    let names = [];
    let index = source.lastIndexOf('(');
    let full;
    let abbr;
    if(index != -1){
        full = source.substring(0, index);
        abbr = source.substring(index + 1, source.length - 1);
    } else {
        full = source;
        abbr = "";
    }
    full = siteUtil.removeNumbers(full).split(";");
    abbr = abbr.split("/");
    for(let i = 0; i < Math.max(full.length, abbr.length); ++i){
        let name = {};
        name.full = (full[i] || "").trim();
        name.abbr = (abbr[i] || "").trim();
        names.push(name);
    }
    return names;
}
