const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/14.txt', 'utf8');
} catch (err) {
    console.error(err);
}

let arr = data.split('\r\n');
let input = [];
arr.forEach(element => {
    elAr = element.split(' ');
    input.push({
        // Dancer can fly 27 km/s for 5 seconds, but then must rest for 132 seconds.
        name: elAr[0],
        speed: elAr[3],
        time: elAr[6],
        rest: elAr[13],
        points: 0
    });
});
let winner = '';
let winDistance = 0;

input.forEach(deer => {
    let raceTime = 2503;
    let distance = 0;
    let running = true;
    while(raceTime > 0){
        if(running){
            let gains = 0;
            if(raceTime < deer.time){
                gains = raceTime * deer.speed;
            }else{
                gains = deer.time * deer.speed;
            }
            distance += gains;
            raceTime -= deer.time;
            running = false;
        }else{
            raceTime -= deer.rest;
            running = true;
        }
    }
    if(distance > winDistance){
        winDistance = distance;
        winner = deer.name;
    }
});

log(winner);
log(winDistance);