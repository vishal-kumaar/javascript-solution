// Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm

let date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();

let time_format1 = `${year}-${month}-${date} ${hours}:${minutes}`;
let time_format2 = `${date}-${month}-${year} ${hours}:${minutes}`;
let time_format3 = `${year}/${month}/${date} ${hours}:${minutes}`;

console.log(time_format1);
console.log(time_format2);
console.log(time_format3);