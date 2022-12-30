// Write a program which tells the number of days in a month

const user_input = prompt("Enter the month name: ").toLowerCase();
const month1 = ["january", "march", "may", "july", "august", "october", "december"];
const month2 = ["april", "june", "september", "november"];

if (month1.includes(user_input)){
    console.log("Number of days are 31");
}
else if (month2.includes(user_input)){
    console.log("Number of days are 30");
}
else if (user_input == "february"){
    console.log("Number of days are 28");
}
else {
    console.log("Invalid month name!!");
}