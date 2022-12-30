// Write a functions which checks if all items are unique in the array

// First Method
// function isUnique(array){
    // for (let index in array){
    //     if (array.slice(index+1, array.length).includes(array[index])){
    //         return false;
    //     }
    // }

    // return true;
// }

// Second method
function isUnique(array){
    for (let item of array){
        if (array.indexOf(item) != array.lastIndexOf(item)){
            return false;
        }
    }
    
    return true;
}

let arr = ["a", "b", "c", "d", "c"];
if (isUnique(arr)){
    console.log("The items in given array is unique");
}
else {
    console.log("The items in given array is not unique");
}