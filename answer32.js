// Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

let countries = ["India", "China", "Sri Lanka", "United State of America", "England", "Iraq", "Greenland", "Ireland", "South Africa", "Pakistan", "Bhutan", "Nepal", "Iran", "China", "New Zealand"];

let countriesWithLand = countries.filter((country) => {
    if (country.includes("land")){
        return country;
    }
})
console.log(countriesWithLand);

let countryWithHighCh;
let highCh = 0;
for (let country of countries){
    if (country.length > highCh){
        countryWithHighCh = country;
        highCh = country.length;
    }
}
console.log(countryWithHighCh);

let countryWithFourCh = countries.filter((country) => {
    if (country.length == 4){
        return country;
    }
})
console.log(countryWithFourCh);

let countriesMoreThanOneWords = countries.filter((country) => {
    if (country.split(" ").length > 1){
        return country;
    }
})
console.log(countriesMoreThanOneWords);

let newCountriesArray = countries.reverse().map((country) => country.toUpperCase());
console.log(newCountriesArray);