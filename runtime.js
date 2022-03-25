const perf = require('execution-time')();

function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppendXL = perf.stop();  // Stops timer and save time results

perf.start();                    
doublerAppend(largeArray);
let resultsAppendL = perf.stop(); 

perf.start();                    
doublerAppend(mediumArray);
let resultsAppendM = perf.stop(); 

perf.start();                    
doublerAppend(smallArray);
let resultsAppendS = perf.stop(); 

perf.start();                    
doublerAppend(tinyArray);
let resultsAppendT = perf.stop(); 


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsertXL = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsInsertL = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsInsertM = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsInsertS = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsInsertT = perf.stop();

function Results(function_and_array_size, time){
    this.function_and_array_size = function_and_array_size;
    this.time = time;
}

let insertXL = new Results('Insert func with Extra Large Array', resultsInsertXL.preciseWords);
let appendXL = new Results('Append func with Extra Large Array', resultsAppendXL.preciseWords);
let insertL = new Results('Insert func with Large Array', resultsInsertL.preciseWords);
let appendL = new Results('Append func with Large Array', resultsAppendL.preciseWords);
let insertM = new Results('Insert func with Medium Array', resultsInsertM.preciseWords);
let appendM = new Results('Append func with Medium Array', resultsAppendM.preciseWords);
let insertS = new Results('Insert func with Small Array', resultsInsertS.preciseWords);
let appendS = new Results('Append func with Small Array', resultsAppendS.preciseWords);
let insertT = new Results('Insert func with Tiny Array', resultsInsertT.preciseWords);
let appendT = new Results('Append func with Tiny Array', resultsAppendT.preciseWords);

console.table([insertXL, appendXL, insertL, appendL, insertM, appendM, insertS, appendS, insertT, appendT]);
/* 
Report:

Both of the function gets longer time when the arrays size increased.
They are both O(n). However, Append function scales better than Insert function because in every results, append function takes less time.

Insertion function is slower because it uses unshift and with unsift it pretty much makes a new array with the new element at the begining, and assign new index for all the elements.
Append function is faster than Insertion function. Event tough, it also needs to make a new array behind the scene, it does not assign new index to every element. It pretty much makes a 1 size bigger than original array and copies all the element then add the new element at the end.
Therefore, they are both O(n) though, append function is faster when you actually scale them with larger size array. 
*/
