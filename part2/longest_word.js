
function findLongestWord(arr){
    let longestWordLength = arr[0].length;
    for(let i = 0; i < arr.length; i++){
        if(longestWordLength < arr[i].length){
            longestWordLength = arr[i].length;
        }
    }   
    return longestWordLength;
}
let arr = ['hi', 'hello', 'Pseudopseudohypoparathyroidism']
console.log(findLongestWord(arr));

/*
Time Complexity 
O(n) => inside the function, there is a for loop that go through each element of the array

Space Complexity
O(1) => arr is just a parameter and when it is passed to the function, the array should exist somewhere in the code and it just passing the pointer of the array not passing actual array to the function.
if it's asking the space complexity of this file then it should be O(n) not O(1).
*/