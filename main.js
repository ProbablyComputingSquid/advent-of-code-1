"use strict";
/*
tasks:
- sort two lists
- compare distance between items of both lists
- add up total distances
*/
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('input.txt').toString("utf-8");
var lines = file.split("\n");
console.log(lines[0]);
var list1 = [];
var list2 = [];
for (var i = 0; i < lines.length; i++) {
    var split = lines[i].split("   ");
    list1.push(split[0]);
    list2.push(split[1]);
}
console.log(list1);
console.log(list2);
list1.sort();
list2.sort();
console.log(list1);
console.log(list2);
var total = 0;
for (var i = 0; i < list1.length; i++) {
    total += Math.abs(Number(list1[i]) - Number(list2[i]));
}
console.log(total);
