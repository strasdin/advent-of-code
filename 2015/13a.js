const fs = require('fs')
const LINQ = require('node-linq').LINQ;
const {log} = require('../common/log');

let data = '';
try {
    data = fs.readFileSync('2015/inputs/13.txt', 'utf8');
} catch (err) {
    console.error(err);
}
let input = [];
data.split('\r\n').forEach(element => {
    let arr = element.split(' ');
    input.push({
        p1: arr[0],
        p2: arr[10].replace('.', ''),
        amount: arr[2] === 'lose' ? parseInt('-' + arr[3]) : parseInt(arr[3])
    });
});
// log(input);
let people = ['Alice', 'Bob', 'Carol', 'David', 'Eric', 'Frank', 'George', 'Mallory'];

let allCombinations = permutator(people);

let highest = 0;

allCombinations.forEach(el => {
    let totalHappiness = 0;
    if(el.length == 8){
        for(let i = 1; i < el.length; i++){
            let c1 = el[i - 1];
            let c2 = el[i];
            input.forEach(element => {
                if((element.p1 == c1 && element.p2 == c2) || (element.p2 == c1 && element.p1 == c2)){
                    totalHappiness += element.amount;
                }
            });
        }
        let c1 = el[0];
        let c2 = el[7];
        input.forEach(element => {
            if((element.p1 == c1 && element.p2 == c2) || (element.p2 == c1 && element.p1 == c2)){
                totalHappiness += element.amount;
            }
        });
    }
    if(parseInt(totalHappiness) > highest){
        highest = parseInt(totalHappiness);
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