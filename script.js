if(location.href.startsWith("https://ieeexplore.ieee.org/search/searchresult.jsp?")){
    ieee.rankingSpanProvider.push(ccf.getRankingSpan);
    ieee.start();
} else if(location.href.startsWith("https://dl.acm.org/action/doSearch?")){
    acm.rankingSpanProvider.push(ccf.getRankingSpan);
    acm.start();
} else if(location.hostname.startsWith("dblp")){
    ccf.custom2rank = dblp.uri2rank
    dblp.rankingSpanProvider.push(ccf.getRankingSpan);
    dblp.start();
} else if(location.href.startsWith("https://link.springer.com/search")){
    springer.rankingSpanProvider.push(ccf.getRankingSpan);
    springer.start();
} else if(location.href.startsWith("https://www.engineeringvillage.com/search")){
    ei.rankingSpanProvider.push(ccf.getRankingSpan);
    ei.start();
} else if (location.hostname.startsWith("scholar.google")) {
    ccf.custom2rank = dblp.uri2rank
    scholar.rankSpanList.push(ccf.getRankingSpan)
    scholar.run();
}
