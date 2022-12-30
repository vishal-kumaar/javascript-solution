// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const n = ages.length;
ages.sort();
console.log(ages)

let min_age = ages[0];
let max_age = ages[n - 1];
let median_age;

if (n % 2 === 0){
    median_age = (ages[n/2] + ages[(n/2)+1])/2;
}
else{
    median_age = ages[Math.floor(n/2)];
}

let totol_age = 0;
for (let age of ages){
    totol_age += age;
}
let avg_age = totol_age/n;

console.log("The minimum age is", ages[0]);
console.log("The maximum age is", ages[n-1]);
console.log("The median age is", median_age);
console.log("The average age is", avg_age);
console.log("The range of ages is", max_age-min_age);
console.log(Math.abs(min_age - avg_age) === Math.abs(max_age - avg_age));