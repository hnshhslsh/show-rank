const dblp = {};

dblp.rankingSpanProvider = [];

dblp.start = function(){
    let url = window.location.href;
    let title = $('head > title').text();
    if(url.startsWith("https://dblp.uni-trier.de/search?")|| url.startsWith("https://dblp.org/search?") || title.indexOf("Search for")!=-1){
        let interval = setInterval(function(){
            let message = $('#completesearch-publs > div > p.waiting');
    
            if(message.css('display') == "none"){
                $(window).bind('popstate', function(){
                    dblp.addRankings();
                });
                dblp.addRankings();
            }
        }, 1000);
    } else if(url.startsWith("https://dblp.uni-trier.de/pid/") || url.startsWith("https://dblp.org/pid/")) {
        dblp.addRankings();
    } else if(url.startsWith("https://dblp.uni-trier.de/db/conf/") || url.startsWith("https://dblp.uni-trier.de/db/journals/") || url.startsWith("https://dblp.org/db/conf/") || url.startsWith("https://dblp.org/db/journals/")) {
        let abbr = dblp.getAbbrFromUrl(url)
        if(url.endsWith(".html") && !url.endsWith("index.html")){
            dblp.addRanking("#breadcrumbs > ul > li > span:nth-child(3) > a > span", abbr);
        } else {
            dblp.addRanking("h1", abbr);
        }
    } 
}

dblp.getAbbrFromUrl = function (url) {
    let start;
    if (url.startsWith("https://dblp.uni-trier.de/db/")) {
        start = url.indexOf("/", 29) + 1; // "https://dblp.uni-trier.de/db/".length == 29
    } else if (url.startsWith("https://dblp.org/db/")) {
        start = url.indexOf("/", 20) + 1; // "https://dblp.org/db/".length == 20
    } else {
        return undefined;
    }
    return url.substring(start, url.indexOf("/", start)).toUpperCase();
}

dblp.addRankings = function(){
    let results = $("cite > a > span:nth-child(1) > span:nth-child(1)");//获取期刊或会议名称
    dblp.resultsCount = results.length;
    
    results.each(function(index){
        let result = $(this);
        let source = result.text().trim().replace(/\(\d+\)/, "");

        // get abbr name from href, thanks @HJhao (https://github.com/HJhao/show-rank/commit/1e36249d10e72ea33007535a4b976f3be70a13d0)
        let url = result.parent().parent().attr("href");
        let abbr = dblp.getAbbrFromUrl(url);
        if (abbr != undefined && source.indexOf('(') == -1) {
            source = source + "(" + abbr + ")";
        }

        if(source.length != 0 && !result.next().hasClass('ccf-ranking')){
            for(let getRankingSpan of dblp.rankingSpanProvider){
                let names = dblp.parseNames(source);
                result.after(getRankingSpan(names));
            }
        }
    });
}

dblp.addRanking = function(selector, abbr){
    let result = $(selector);
    let source = result.text().trim();
    if(abbr != undefined && source.indexOf('(') == -1){
        source = source + "(" + abbr + ")";
    }
    if(source.length != 0){
        for(let getRankingSpan of dblp.rankingSpanProvider){
            let names = dblp.parseNames(source);
            result.after(getRankingSpan(names));
        }
    }
}

dblp.parseNames = function(source){
    let names = [];
    let index = source.lastIndexOf('(');
    let full;
    let abbr;
    if(index != -1){
        full = source.substring(0, index);
        abbr = source.substring(index + 1, source.length - 1);
    } else {
        if(source.length<=12){
            abbr=source;
            full="";
        }else{
            full = source;
            abbr = "";
        }
        
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
