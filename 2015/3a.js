const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/3.txt', 'utf8');
} catch (err) {
    console.error(err);
}

let houses = [];

let input = data.split('');

let x = 0, y = 0;

houses["0,0"] = 1;

input.forEach(element => {
    switch(element){
        case '^':
            x++;
            break;
        case 'v':
            x--;
            break;
        case '>':
            y++;
            break;
        case '<':
            y--;
            break;
    }
    if(houses[`${x},${y}`]){
        houses[`${x},${y}`] = houses[`${x},${y}`] + 1;
    }else{
        houses[`${x},${y}`] = 1;
    }
});

let multiVisit = Object.entries(houses).length;

log(multiVisit);