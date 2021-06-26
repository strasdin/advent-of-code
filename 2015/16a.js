const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/16.txt', 'utf8');
} catch (err) {
    console.error(err);
}

let input = [];

data.split('\r\n').forEach(element => {
    // Sue 1: children: 1, cars: 8, vizslas: 7
    let match = element.match(/Sue \d+: (\w+): (\d+), (\w+): (\d+), (\w+): (\d+)/);
    
    let item = {};

    item[match[1]] = parseInt(match[2]);
    item[match[3]] = parseInt(match[4]);
    item[match[5]] = parseInt(match[6]);

    input.push(item);
    
});

for(let i = 0; i < input.length; i++){
    let item = input[i];
    let possibleMatch = true;

    if((item['children'] && item['children'] !== 3)){
        possibleMatch = false;
    }
    if((item['cats'] && item['cats'] !== 7)){
        possibleMatch = false;
    }
    if((item['samoyeds'] && item['samoyeds'] !== 2)){
        possibleMatch = false;
    }
    if((item['pomeranians'] && item['pomeranians'] !== 3)){
        possibleMatch = false;
    }
    if((item['akitas'] && item['akitas'] !== 0)){
        possibleMatch = false;
    }
    if((item['vizslas'] && item['vizslas'] !== 0)){
        possibleMatch = false;
    }
    if((item['goldfish'] && item['goldfish'] !== 5)){
        possibleMatch = false;
    }
    if((item['trees'] && item['trees'] !== 3)){
        possibleMatch = false;
    }
    if((item['cars'] && item['cars'] !== 2)){
        possibleMatch = false;
    }
    if((item['perfumes'] && item['perfumes'] !== 1)){
        possibleMatch = false;
    }

    if(possibleMatch){
        log('POSSIBLE MATCH: ' + (i + 1))
    }
    
}


// log(input);