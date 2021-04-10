const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/9.txt', 'utf8');
} catch (err) {
    console.error(err);
}

let input = [];

data.split('\r\n').forEach(element => {
    let arr = element.split(' ');
    let temp = {
        loc1: arr[0],
        loc2: arr[2],
        distance: parseInt(arr[4])
    }
    input.push(temp);
    
});

let cities = ['Faerun', 'Norrath', 'Tristram', 'AlphaCentauri', 'Arbre', 'Snowdin', 'Tambi', 'Straylight']

let allCombinations = permutator(cities);

let highest = 0;

allCombinations.forEach(el => {
    let totalDistance = 0;
    if(el.length == 8){
        for(let i = 1; i < el.length; i++){
            let c1 = el[i - 1];
            let c2 = el[i];
            input.forEach(element => {
                if((element.loc1 == c1 && element.loc2 == c2) || (element.loc2 == c1 && element.loc1 == c2)){
                    totalDistance += element.distance;
                }
            });
        }
    }
    if(parseInt(totalDistance) > highest){
        highest = parseInt(totalDistance);
    }
});

log(highest);

function permutator(inputArr) {
    var results = [];
  
    function permute(arr, memo) {
      var cur, memo = memo || [];
  
      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
  
      return results;
    }
  
    return permute(inputArr);
  }