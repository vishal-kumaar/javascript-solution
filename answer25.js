// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Adding 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes("Meat")){
    shoppingCart.unshift("Meat");
}

// Adding "Sugar" at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar");
}

// Removing 'Honey'
shoppingCart.pop();


// Modifying Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";

// Displayiing resultant array
console.log(shoppingCart)