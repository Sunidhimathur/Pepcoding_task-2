const request = require("request");
const cheerio = require("cheerio");
const url = "https://en.wikipedia.org/wiki/N";

request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}

function extractHTML(html) {
    let $ = cheerio.load(html);
    
    let headline = $(".mw-body-content.mw-content-ltr div.mw-parser-output h2 span#History.mw-headline");
    let writing = $(".mw-body-content.mw-content-ltr div.mw-parser-output h2 span#Use_in_writing_systems.mw-headline");
    let uses = $(".mw-body-content.mw-content-ltr div.mw-parser-output h2 span#Other_uses.mw-headline");

    let para = $(".mw-body-content.mw-content-ltr div.mw-parser-output p");

    let head = $(headline).text();
    let write = $(writing).text();
    let use = $(uses).text();
    let text = $(para).text();

    console.log(head);
    console.log(write);
    console.log(use);
    console.log(text);
}