
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));

/*
Time Complexity 
O(n^2) => inside the for loop, it uses add method. Big-o of insertion for array is O(n). If the add method's big-o is O(1) then it should be O(n) not O(n^2).

Space Complexity
O(n) => inside the function, it declared a new variable and it is an instance of Set class. and it is making an array, therefore it's space complexity is O(n).
*/