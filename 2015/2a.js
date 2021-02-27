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

    let s1 = l * w * 2;
    let s2 = l * h * 2;
    let s3 = h * w * 2;

    let arr = [s1, s2, s3].sort(function(a, b) {
        return a - b;
    });
    
    let slack = arr[0] / 2;
    
    total +=  s1 + s2  + s3 + slack;
});

log(total);