// import data from './128KB.json'

import * as data from "./128KB.json"

let datum = data
let IDs: string[] = [];

// for data1 in datum {
//     console.log(data1);
// }

datum.forEach(myFunction)

function myFunction(item) {
    // console.log(item)
    IDs.push(item['id'])
}

console.log(IDs)
console.log("stop...")