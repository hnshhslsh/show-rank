/**
 * Based on https://github.com/WenyanLiu/CCFrank4dblp/blob/704960f95393fdcacdd5f71864f3768518a9fb2a/js/scholar.js
 * 
 * MIT License
 * 
 * Copyright (c) 2019 wyliu
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const scholar = {};

scholar.rankSpanList = [];

scholar.run = function () {
  let url = window.location.pathname;
  if (url == "/scholar") {
    scholar.appendRank();
  } else if (url == "/citations") {
    setInterval(function () {
      $(window).bind("popstate", function () {
        scholar.appendRanks();
      });
      scholar.appendRanks();
    }, 2000);
  }
};

scholar.appendRank = function () {
  let elements = $("#gs_res_ccl_mid > div > div.gs_ri");
  elements.each(function () {
    let node = $(this).find("h3 > a");
    let title = node.text().replace(/[^A-z]/g, " ");
    let data = $(this)
      .find("div.gs_a")
      .text()
      .replace(/[\,\-\…]/g, "")
      .split(" ");
    let author = data[1];
    let year = data.slice(-3)[0];
    fetchRank(node, title, author, year);
  });
};

scholar.appendRanks = function () {
  let elements = $("tr.gsc_a_tr");
  elements.each(function () {
    let node = $(this).find("td.gsc_a_t > a");
    if (!node.next().hasClass("ccf-rank")) {
      let title = node.text().replace(/[^A-z]/g, " ");
      let author = $(this)
        .find("div.gs_gray")
        .text()
        .replace(/[\,\…]/g, "")
        .split(" ")[1];
      let year = $(this).find("td.gsc_a_y").text();
      fetchRank(node, title, author, year);
    }
  });
};

function fetchRank(node, title, author, year) {
  var xhr = new XMLHttpRequest();
  api_format = "https://dblp.org/search/publ/api?q=" + encodeURIComponent(title + " " + author) + "&format=json";
  xhr.open("GET", api_format, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var dblp_url = "";
      var resp = JSON.parse(xhr.responseText).result.hits;
      if (resp["@total"] == 0) {
        dblp_url == "";
      } else if (resp["@total"] == 1) {
        url = resp.hit[0].info.url;
        dblp_url = url.substring(
          url.indexOf("/rec/") + 5,
          url.lastIndexOf("/")
        );
      } else {
        for (var h = 0; h < resp["@total"]; h++) {
          info = resp.hit[h].info
          author_1st = info.authors.author[0].text;
          year_fuzzy = info.year;
          year_last_check = 0;
          if (Math.abs(Number(year) - year_fuzzy) <= 1
            && author_1st.toLowerCase().split(" ").indexOf(author.toLowerCase()) != -1
            && year_fuzzy != year_last_check) {
            year_last_check = year_fuzzy;
            url = resp.hit[h].info.url;
            dblp_url_last_check = url.substring(
              url.indexOf("/rec/") + 5,
              url.lastIndexOf("/")
            );
            if (year_fuzzy == year + 1) {
              dblp_url = dblp_url_last_check;
            } else if (year_fuzzy == year) {
              dblp_url = dblp_url_last_check;
              break;
            } else {
              if (dblp_url == "") {
                dblp_url = dblp_url_last_check;
              };
            }
          }
        }
      }
      const names = [{uri: dblp_url}];
      for (let getRankSpan of scholar.rankSpanList) {
        $(node).after(getRankSpan(names));
      }
    }
  };
  xhr.send();
};