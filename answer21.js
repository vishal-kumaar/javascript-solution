// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer

let user_input = prompt("Enter the month name: ").toLowerCase();

if (user_input === "september" || user_input === "october" || user_input === "november"){
    console.log("The Season is Autumn");
}
else if (user_input === "december" || user_input === "january" || user_input === "february"){
    console.log("The Season is Winter");
}
else if (user_input === "march" || user_input === "april" || user_input === "may"){
    console.log("The Season is Spring");
}
else if (user_input === "june" || user_input === "july" || user_input === "august"){
    console.log("The Season is Summer");
}
else {
    console.log("Invalid month name!!");
}