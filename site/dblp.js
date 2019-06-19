const dblp = {};

dblp.rankingSpanProvider = [];

dblp.start = function(){
    let interval = setInterval(function(){
        let message = $('#completesearch-publs > div > p.waiting').css('display');
        if(message == "none"){
            $(window).bind('popstate', function(){
                dblp.addRankings();
            });
            dblp.addRankings();
        }
    }, 1000);
}

dblp.addRankings = function(){
    let results = $(".entry > div.data > a > span:nth-child(1) > span:nth-child(1)");//获取期刊或会议名称
    
    dblp.resultsCount = results.length;
    
    results.each(function(index){
        let result = $(this);
        let source = result.text().trim();
        if(source.length != 0){
            let names = dblp.parseNames(source);
            for(let getRankingSpan of dblp.rankingSpanProvider){
                if($(this).next().hasClass('ccf-ranking')){
                    result.after('');
                }else{
                    result.after(getRankingSpan(names));
                }
            }
        }
        
    });
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
