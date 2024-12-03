"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('input.txt').toString("utf-8");
var lines = file.split("\n");
var list2Times = {};
for (var i = 0; i < lines.length; i++) {
    var split = lines[i].split("   ");
    //let num1 = split[0];
    var num2 = split[1];
    //list1Times[num1] += 1;
    if (list2Times[num2] == undefined) {
        list2Times[num2] = 0;
    }
    list2Times[num2] += 1;
}
//console.log(list2Times);
var total = 0;
for (var i = 0; i < lines.length; i++) {
    var split = lines[i].split("   ");
    //console.log(split[0]);
    var num1 = Number(split[0]);
    // console.log(num1);
    if (list2Times[num1] != undefined) {
        total += num1 * list2Times[num1];
    }
}
console.log(total);
