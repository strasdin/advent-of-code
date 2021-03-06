const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/5.txt', 'utf8');
} catch (err) {
    console.error(err);
}

let input = [];

data.split('\r\n').forEach(element => {
    let temp = element;
    input.push(temp);
    
});

let total = 0;

input.forEach(element => {
    let pairRegex = /(\w\w)\w*\1/;
    let oddRegex = /(\w)\w\1/;

    if(element.match(pairRegex) && element.match(oddRegex)){
        total++;
    }
});

log(total);
