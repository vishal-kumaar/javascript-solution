// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation

function solveLinEquation(a, b, c){
    let y = 0;
    let x = -(b*y + c)/a;

    return [x, y];
}

console.log(solveLinEquation(5, 6, -15));