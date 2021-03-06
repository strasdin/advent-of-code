const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/1.txt', 'utf8');
} catch (err) {
    console.error(err);
}

let arr = data.split('');

let floor = 0;

arr.forEach(element => {
    if(element === '('){
        floor++;
    }else{
        floor--;
    }
});

log(floor);