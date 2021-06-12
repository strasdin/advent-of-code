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
        speed: parseInt(elAr[3]),
        time: parseInt(elAr[6]),
        timeLeft: parseInt(elAr[6]),
        rest: parseInt(elAr[13]),
        restLeft: 0,
        distanceTraveled: 0,
        points: 0
    });
});
let winner = '';
let winPoints = 0;

let roundDistanceWin = 0;

let raceTime = 2503;
for(let i = 0; i < raceTime; i++){
    input.forEach(deer => {
        if(deer.timeLeft > 0 && deer.restLeft === 0){
            deer.distanceTraveled += deer.speed;
            deer.timeLeft--;
            if(deer.timeLeft === 0){
                deer.restLeft = deer.rest;
            }
        }else if(deer.timeLeft === 0 && deer.restLeft > 0){

            deer.restLeft--;
            if(deer.restLeft === 0){
                deer.timeLeft = deer.time;
            }
        }
    });
    input.forEach(deer => {
        if(deer.distanceTraveled > roundDistanceWin){
            roundDistanceWin = deer.distanceTraveled;
        }
    });
    input.forEach(deer => {
        if(deer.distanceTraveled === roundDistanceWin){
            deer.points++;
        }
    });
}

input.forEach(deer => {
    if(deer.points > winPoints){
        winner = deer.name;
        winPoints = deer.points;
    }
});

log(winner);
log(winPoints);