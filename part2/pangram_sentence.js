
function isPangram(str){
    str = str.toLowerCase();
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabets.split('');
    for(let i = 0; i < str.length; i++){
        const el = str[i];
        const index = alphaArr.indexOf(el);
        if(index !== -1){
           alphaArr.splice(index, 1);
        };
     };
     return alphaArr.length === 0;
}

const str = 'The quick brown fox jumps over the lazy dog!';
const str2 = 'I like cats, but not mice';

console.log(isPangram(str2));

/*
Time Complexity 
O(n^2) => inside the for loop, it uses indexOf array method that also go through each element in the array.

Space Complexity
O(n) => inside the function, it declares a new plphaArr. 
*/