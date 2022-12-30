// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds

let sumOfEvens = 0;
let sumOfOdds = 0;

for (let i = 0; i <= 100; i++){
    if (i % 2 == 0){
        sumOfEvens += i;
    }
    else {
        sumOfOdds += i;
    }
}

console.log("The sum of evens between 0 to 100 =", sumOfEvens);
console.log("The sum of odds between 0 to 100 =", sumOfOdds);