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

let niceChars = 'aeiou'.split('');

let badStrings = ['ab', 'cd', 'pq', 'xy'];

let total = 0;

input.forEach(element => {
    let isGood = true;

    badStrings.forEach(bad => {
        if(element.includes(bad)){
            log('is bad');
            isGood = false;
        }
    });

    let vowelCount = 0;

    niceChars.forEach(nice => {
        element.split('').forEach(spl => {
            if(spl === nice){
                vowelCount++;
            }
        });
    });

    log(vowelCount);

    if(vowelCount < 3){
        isGood = false;
    }

    if(!hasRepeatedLetters(element)){
        isGood = false;
    }

    if(isGood){
        total++;
    }
});

function hasRepeatedLetters(str) {
    return (/([a-z])\1/i).test(str);
}

log(total);