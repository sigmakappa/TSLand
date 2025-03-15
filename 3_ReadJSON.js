"use strict";
// import data from './128KB.json'
Object.defineProperty(exports, "__esModule", { value: true });
var data = require("./128KB.json");
var datum = data;
var IDs = [];
// for data1 in datum {
//     console.log(data1);
// }
datum.forEach(myFunction);
function myFunction(item) {
    // console.log(item)
    IDs.push(item['id']);
}
console.log(IDs);
console.log("stop...");
