
function addToZero(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr.includes(-(arr[i]))){
            return true;
        }
    }
    return false;
}

let arr = [1, 2, 3, -2];
console.log(addToZero(arr));

/*
Time Complexity 
O(n^2) => inside the for loop, it uses includes array method that also go through each element in the array.

Space Complexity
O(1) => arr is just a parameter and when it is passed to the function, the array should exist somewhere in the code and it just passing the pointer of the array not passing actual array to the function.
inside the function, it only declared let i = 0. therefore O(1).

if it's asking the space complexity of this file then it should be O(n) not O(1).
*/
