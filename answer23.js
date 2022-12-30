// Write a program which tells the number of days in a month, now consider leap year

const month = prompt("Enter the month name: ").toLowerCase();
const year = Number(prompt("Enter the year: "));
const month1 = ["january", "march", "may", "july", "august", "october", "december"];
const month2 = ["april", "june", "september", "november"];

if (month1.includes(month)){
    console.log("Number of days are 31");
}
else if (month2.includes(month)){
    console.log("Number of days are 30");
}
else if (month == "february"){
    if (year % 4 == 0){
        console.log("Number of days are 29");
    }
    else {
        console.log("Number of days are 28");
    }
}
else {
    console.log("Invalid month name!!");
}