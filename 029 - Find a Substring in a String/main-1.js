"use strict";

function findSubstring(find, word) {
    if (!(typeof find === "string" && typeof word === "string")) {
        return -1;
    }
    return String(word).indexOf(find);
}

console.log(findSubstring("sad", "saadbutsad"));
console.log(findSubstring("leeto", "leetcode"));
console.log(findSubstring("sad", "sadbutsad"));
