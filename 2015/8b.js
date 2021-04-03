const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/8.txt', 'utf8');
} catch (err) {
    console.error(err);
}

let input = [];
let totalLength = 0;

data.split('\r\n').forEach(element => {
    let temp = element;
    totalLength += element.length;
    input.push(temp);
    
});

let total = 0;

input.forEach(element => {
    total += letterLength(element);
});

function letterLength(word){
    return JSON.stringify(word).length;
}

log(total - totalLength);