const ei = {};

ei.rankingSpanProvider = [];

ei.start = function(){
    let interval = setInterval(function(){
        if(!ei.isLoading()){
            clearInterval(interval);
            //for desktop page select 
            $("#page-nav").click(function(){
                ei.start()
            });
            ei.addRankings();
        }
    },1000)
}

ei.isLoading = function(){
    return $('#ev-loading').attr('style').indexOf('display:none') === -1 || $('#loading-results').attr('style') !==undefined
}

ei.addRankings = function(){
    $('.source-info').each(function(index){
        ei.addRanking($(this));
    })
}

ei.addRanking = function(result){
    let source = result.text().trim();
    if (source.length !== 0){
        let names = ei.parseNames(source)
        for(let getRankingSpan of ei.rankingSpanProvider){
            result.before(getRankingSpan(names));
        }
    }
}

ei.parseNames = function (source) {
    let names = [];
    let abbr = '';
    let full = '';

    // 删除年限、第几届
    source = source.replace(/(3rd)|([0-9]{4})/g,'')
    // 删除所有的次序

    source = source.replace(/.*[0-9]+th/g,'')
    source = source.trim()

    // processdings
    if (source.match(",.+-")!==null){
        abbr = source.match(",.+-")[0].replace(/,|-/g,'').trim()
        full = source.match('.*,')[0].replace(/,/g,'').trim()
    }else if(source.match(",")!==null){
        abbr = source
        full = source.substr(source.match(".*,")[0].length)
    }else{
        abbr = source
        full = source
    }

    names.push({
        'full': full,
        'abbr': abbr
    });
    return names;
}