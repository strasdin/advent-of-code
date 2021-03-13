const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/6.txt', 'utf8');
} catch (err) {
    console.error(err);
}

let input = [];

data.split('\r\n').forEach(element => {
    let singleFirst = element.replace('turn o', 'turno');
    let arr = singleFirst.split(' ');

    let xmin = Math.min(arr[1].split(',')[0], arr[3].split(',')[0]);
    let xmax = Math.max(arr[1].split(',')[0], arr[3].split(',')[0]);

    let ymin = Math.min(arr[1].split(',')[1], arr[3].split(',')[1]);
    let ymax = Math.max(arr[1].split(',')[1], arr[3].split(',')[1]);

    let light = {
        command: arr[0],
        x1: xmin,
        y1: ymin,
        x2: xmax,
        y2: ymax
    };
    input.push(light);
    // log(light);
});

let grid = [];
for(let i = 0; i < 1000; i++){
    grid[i] = [];
    for(let j = 0; j < 1000; j++){
        grid[i][j] = false;
    }
}

input.forEach(element => {
    for(let x = element.x1; x <= element.x2; x++){
        for(let y = element.y1; y <= element.y2; y++){
            if(element.command === 'turnoff'){
                grid[x][y] = false;
            }else if(element.command === 'turnon'){
                grid[x][y] = true;
            }else if(element.command === 'toggle'){
                grid[x][y] = !grid[x][y];
            }
        }
    }
});

let total = 0;

for(let i = 0; i < 1000; i++){
    for(let j = 0; j < 1000; j++){
         if(grid[i][j]){
             total++;
         }
    }
}

log(total);