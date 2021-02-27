const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/2.txt', 'utf8');
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
    let nums = element.split('x');
    
    let l = nums[0];
    let w = nums[1];
    let h = nums[2];

    let arr = [l, w, h].sort(function(a, b) {
        return a - b;
    });
    
    let ribbon = arr[0] * 2 + arr[1] * 2;
    let bow = l * w * h;
    total += ribbon + bow;
});

log(total);