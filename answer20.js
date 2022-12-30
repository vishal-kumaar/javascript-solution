// Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let score = 87;

if (score >= 80 && score <= 100){
    console.log("Grade is A");
}
else if (score >= 70 && score <= 79){
    console.log("Grade is B");
}
else if (score >= 69 && score <= 60){
    console.log("Grade is C");
}
else if (score >= 50 && score <= 59){
    console.log("Grade is D");
}
else if (score >= 0 && score <= 49){
    console.log("Grade is F");
}
else {
    console.log("Invalid Score");
}