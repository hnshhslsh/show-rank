acm.rankingSpanProvider.push(ccf.getRankingSpan);
ieee.rankingSpanProvider.push(ccf.getRankingSpan);
dblp.rankingSpanProvider.push(ccf.getRankingSpan);
springer.rankingSpanProvider.push(ccf.getRankingSpan);
ei.rankingSpanProvider.push(ccf.getRankingSpan);

if(location.href.startsWith("https://ieeexplore.ieee.org/search/searchresult.jsp?")){
    ieee.start();
} else if(location.href.startsWith("https://dl.acm.org/action/doSearch?")){
    acm.start();
} else if(location.href.startsWith("https://dblp.uni-trier.de") || location.href.startsWith("https://dblp.org")){
    dblp.start();
} else if(location.href.startsWith("https://link.springer.com/search")){
    springer.start();
} else if(location.href.startsWith("https://www.engineeringvillage.com/search")){
    ei.start();
}
