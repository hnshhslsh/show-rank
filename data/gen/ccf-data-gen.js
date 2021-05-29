const fs = require('fs');
const csv = require('csv-parser');

const ranks = [];
const full2rank = {};
const abbr2index = {};
const uri2index = {};
let index = 0;

//Ranking raw data form https://github.com/magichan/CCF-Recommended-Catalog-2019
fs.createReadStream('ccf-2019.csv')
    .pipe(csv())
    .on('data', (row) => {
        const rank = [];
        rank.push(row.full);
        rank.push(row.rank);
        ranks.push(rank)

        row.full = row.full.toLowerCase();
        row.abbr = row.abbr.toLowerCase();
        row.dblp_uri = row.dblp_uri.toLowerCase();

        full2rank[row.full] = row.rank;
        if (row.abbr.length != 0) {
            if (abbr2index[row.abbr] == undefined) {
                abbr2index[row.abbr] = []
            }
            abbr2index[row.abbr].push(index);
        }
        if (row.dblp_uri.length != 0) {
            uri2index[row.dblp_uri] = index;
        }
        index++;
    })
    .on('end', () => {
        fs.writeFileSync('../ccf-rank.js', "ccf.rank = " + JSON.stringify(ranks), 'utf8');
        fs.writeFileSync('../ccf-index.js',
            "ccf.full2rank = " + JSON.stringify(full2rank) + "\n" +
            "ccf.abbr2index = " + JSON.stringify(abbr2index) + "\n" +
            "ccf.dblp_uri2index = " + JSON.stringify(uri2index) + "\n",
            'utf8');
        console.log(ranks.length + " items written")
    });

