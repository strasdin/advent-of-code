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
let ind = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === '('){
        floor++;
    }else{
        floor--;
    }
    if(floor < 0){
        ind = i + 1;
        i = arr.length;
    }
}

log(ind);