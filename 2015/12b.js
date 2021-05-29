const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/12.txt', 'utf8');
} catch (err) {
    console.error(err);
}

let total = 0;

var replaceDone = false;

while (replaceDone === false) {
    replaceDone = true;
    while (/\{[^\{}]*:"red"[^\{}]*\}/g.test(data)) {
        replaceDone = false;
        data = data.replace(/\{[^\{}]*:"red"[^\{}]*\}/g, '');
    }
    data = data.replace(/\{([^\{}]*)\}/g, "[$1]");
}

data.match(/[+-]?\d+(?:\.\d+)?/g).forEach(element => {
    total += parseInt(element);
});

log(total);