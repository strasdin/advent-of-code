const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');
const md5 = require('md5');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/4.txt', 'utf8');
} catch (err) {
    console.error(err);
}

let key = data;

for(var i = 0; i < 100000000; i++){
    let newKey = key + '' + i;
    let hash = md5(newKey);
    if(hash.startsWith('000000')){
        log(hash);
        log(i);
        i = 100000000;
    }
}