const dblp = {};

dblp.resultsCount = 0;
dblp.rankingSpanProvider = [];

var aa=false;

dblp.start = function(){
    let interval = setInterval(function(){
        $(function(){
            let message = $('#completesearch-publs > div > p.waiting').css('display');
            if(message == "none"){
                //clearInterval(interval);
                //$(window).scroll(dblp.judge);
                dblp.addRankings();
            }
        })
    }, 1000);
}

// dblp.judge = function(){
//     let scrollTop = 0; //滚动条当前的位置
//     let clientHeight = 0;  //当前可视范围的高度  
//     let documentHeight=Math.max(document.body.scrollHeight, 
//         document.documentElement.scrollHeight); //文档完整的高度

//     if (document.documentElement && document.documentElement.scrollTop) {   
//         scrollTop = document.documentElement.scrollTop;   
//     }   
//     else if (document.body) {   
//         scrollTop = document.body.scrollTop;   
//     }
 
//     if (document.body.clientHeight && document.documentElement.clientHeight) {   
//         clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);   
//     }   
//     else {   
//         clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);   
//     }
//     //console.log(scrollTop+','+clientHeight+','+documentHeight);
//     //经过debug发现dblp的页面刷新机制
//     //scrollTop+2*clientHeight>=documentHeight
//     if(scrollTop+2*clientHeight>=documentHeight){
//         console.log(scrollTop+','+clientHeight+','+documentHeight);
//         dblp.addRankings();
//     }

// }

dblp.addRankings = function(){
    let results = $(".entry > div.data > a > span:nth-child(1) > span:nth-child(1)");//获取期刊或会议名称
    if(results.length == dblp.resultsCount){
        setTimeout(dblp.addRankings, 1000);
        return ;
    }
    let from = dblp.resultsCount;
    dblp.resultsCount = results.length;
    
    results.each(function(index){
        if(index >= from){
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
        }
    });
    if(!aa){
        console.log(results);
        aa=true;
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
