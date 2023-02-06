// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [{
        name: "Brocoli",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        quantity: 0,
        price: 1.99,
        type: "v",
        img: 'images/food/broccoli.png'
    },
    {
        name: "Bread",
        vegetarian: true,
        glutenFree: false,
        organic: false,
        quantity: 0,
        price: 2.35,
        type: "o",
        img: 'images/food/bread.png'
    },
    {
        name: "Salmon",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        quantity: 0,
        price: 12.99,
        type: "m",
        img: 'images/food/salmon.png'
    },
    {
        name: "Kale",
        vegetarian: true,
        glutenFree: true,
        quantity: 0,
        price: 3.99,
        type: "v",
        img: 'images/food/kale.png'
    },
    {
        name: "Blueberries",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        quantity: 0,
        price: 5.34,
        type: "f",
        img: 'images/food/blueberries.png'
    },
    {
        name: "Mango juice",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        quantity: 0,
        price: 5.27,
        type: "f",
        img: 'images/food/mangoJuice.png'
    },
    {
        name: "Corn Tortillas",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        price: 6.46,
        type: "o",
        img: 'images/food/cornTorillas.png'
    },
    {
        name: "Cherry Muffin",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        quantity: 0,
        price: 2.11,
        type: "o",
        img: 'images/food/muffin.png'
    },
    {
        name: "Gluten-Free Apple Pie",
        vegetarian: false,
        glutenFree: true,
        organic: false,
        quantity: 0,
        price: 7.89,
        type: "o",
        img: 'images/food/applePie.png'
    },
    {
        name: "Fruitloops Cereal",
        vegetarian: false,
        glutenFree: false,
        organic: false,
        quantity: 0,
        price: 4.99,
        type: "o",
        img: 'images/food/fruitLoop.png'
    }
];


function sortByPrice(a, b) {
    return a.price - b.price;
}

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {

    prods.sort(sortByPrice)

    let product_names = [];

    // None case:
    if (restriction.length == 0) {
        for (let i = 0; i < prods.length; i += 1) {
            product_names.push(prods[i].name);
        }
    }
    // Single option selected
    else if (restriction.length == 1) {
        product_names = fetchFoodOptions(restriction, 0, prods)
    }
    // Intersection of options
    else {

        for (let runner = 0; runner < prods.length; runner += 1) {

            console.log(restriction[0] + ", " + restriction[1] + ", " + restriction[2]);

            // Case 1: Veg + Glut
            if ((restriction[0] == "Vegetarian" && restriction[1] == "GlutenFree" && restriction[2] == undefined) && (prods[runner].vegetarian == true) && (prods[runner].glutenFree == true)) {
                product_names.push(prods[runner].name);
            }
            // Case 2: Veg + Organic
            else if ((restriction[0] == "Vegetarian" && restriction[1] == "Organic" && restriction[2] == undefined) && (prods[runner].vegetarian == true) && (prods[runner].organic == true)) {
                product_names.push(prods[runner].name);
            }

            // Case 3: Glut + Organic
            else if ((restriction[0] == "GlutenFree" && restriction[1] == "Organic" && restriction[2] == undefined) && (prods[runner].glutenFree == true) && (prods[runner].organic == true)) {
                product_names.push(prods[runner].name);
            }

            // Case 4: Glut + Organic + veg
            else if ((restriction[0] == "Vegetarian" && restriction[1] == "GlutenFree" && restriction[2] == "Organic") && (prods[runner].glutenFree == true) && (prods[runner].organic == true) && (prods[runner].vegetarian == true)) {
                product_names.push(prods[runner].name);
            }
        }

    }

    return product_names;
}

function fetchFoodOptions(restriction, restriction_index, prods) {

    let product = []

    for (let runner = 0; runner < prods.length; runner += 1) {

        if ((restriction[restriction_index] == "Vegetarian") && (prods[runner].vegetarian == true)) {
            product.push(prods[runner].name);
        } else if ((restriction[restriction_index] == "GlutenFree") && (prods[runner].glutenFree == true)) {
            product.push(prods[runner].name);
        } else if ((restriction[restriction_index] == "Organic") && (prods[runner].organic == true)) {
            product.push(prods[runner].name);
        }
    }

    return product;
}

function fetchFoodPrices(restriction, restriction_index, prods) {

    let product = []

    for (let runner = 0; runner < prods.length; runner += 1) {

        if ((restriction[restriction_index] == "Vegetarian") && (prods[runner].vegetarian == true)) {
            product.push(prods[runner].price);
        } else if ((restriction[restriction_index] == "GlutenFree") && (prods[runner].glutenFree == true)) {
            product.push(prods[runner].price);
        } else if ((restriction[restriction_index] == "Organic") && (prods[runner].organic == true)) {
            product.push(prods[runner].price);
        }
    }

    return product;
}



function fetchFoodType(restriction, restriction_index, prods) {

    let product = []

    for (let runner = 0; runner < prods.length; runner += 1) {

        if ((restriction[restriction_index] == "Vegetarian") && (prods[runner].vegetarian == true)) {
            product.push(prods[runner].type);
        } else if ((restriction[restriction_index] == "GlutenFree") && (prods[runner].glutenFree == true)) {
            product.push(prods[runner].type);
        } else if ((restriction[restriction_index] == "Organic") && (prods[runner].organic == true)) {
            product.push(prods[runner].type);
        }
    }

    return product;
}

function restrictListType(prods, restriction) {

    prods.sort(sortByPrice)

    let product_names = [];

    // None case:
    if (restriction.length == 0) {
        for (let i = 0; i < prods.length; i += 1) {
            product_names.push(prods[i].type);
        }
    }
    // Single option selected
    else if (restriction.length == 1) {
        product_names = fetchFoodType(restriction, 0, prods)
    }
    // Intersection of options
    else {

        for (let runner = 0; runner < prods.length; runner += 1) {

            console.log(restriction[0] + ", " + restriction[1] + ", " + restriction[2]);

            // Case 1: Veg + Glut
            if ((restriction[0] == "Vegetarian" && restriction[1] == "GlutenFree" && restriction[2] == undefined) && (prods[runner].vegetarian == true) && (prods[runner].glutenFree == true)) {
                product_names.push(prods[runner].type);
            }
            // Case 2: Veg + Organic
            else if ((restriction[0] == "Vegetarian" && restriction[1] == "Organic" && restriction[2] == undefined) && (prods[runner].vegetarian == true) && (prods[runner].organic == true)) {
                product_names.push(prods[runner].type);
            }

            // Case 3: Glut + Organic
            else if ((restriction[0] == "GlutenFree" && restriction[1] == "Organic" && restriction[2] == undefined) && (prods[runner].glutenFree == true) && (prods[runner].organic == true)) {
                product_names.push(prods[runner].type);
            }

            // Case 4: Glut + Organic + veg
            else if ((restriction[0] == "Vegetarian" && restriction[1] == "GlutenFree" && restriction[2] == "Organic") && (prods[runner].glutenFree == true) && (prods[runner].organic == true) && (prods[runner].vegetarian == true)) {
                product_names.push(prods[runner].type);
            }
        }

    }

    return product_names;
}



function restrictListPrices(prods, restriction) {

    prods.sort(sortByPrice)

    let product_names = [];

    // None case:
    if (restriction.length == 0) {
        for (let i = 0; i < prods.length; i += 1) {
            product_names.push(prods[i].price);
        }
    }
    // Single option selected
    else if (restriction.length == 1) {
        product_names = fetchFoodPrices(restriction, 0, prods)
    }
    // Intersection of options
    else {

        for (let runner = 0; runner < prods.length; runner += 1) {

            console.log(restriction[0] + ", " + restriction[1] + ", " + restriction[2]);

            // Case 1: Veg + Glut
            if ((restriction[0] == "Vegetarian" && restriction[1] == "GlutenFree" && restriction[2] == undefined) && (prods[runner].vegetarian == true) && (prods[runner].glutenFree == true)) {
                product_names.push(prods[runner].price);
            }
            // Case 2: Veg + Organic
            else if ((restriction[0] == "Vegetarian" && restriction[1] == "Organic" && restriction[2] == undefined) && (prods[runner].vegetarian == true) && (prods[runner].organic == true)) {
                product_names.push(prods[runner].price);
            }

            // Case 3: Glut + Organic
            else if ((restriction[0] == "GlutenFree" && restriction[1] == "Organic" && restriction[2] == undefined) && (prods[runner].glutenFree == true) && (prods[runner].organic == true)) {
                product_names.push(prods[runner].price);
            }

            // Case 4: Glut + Organic + veg
            else if ((restriction[0] == "Vegetarian" && restriction[1] == "GlutenFree" && restriction[2] == "Organic") && (prods[runner].glutenFree == true) && (prods[runner].organic == true) && (prods[runner].vegetarian == true)) {
                product_names.push(prods[runner].price);
            }
        }

    }

    return product_names;
}

function getProductImg(chosenProducts) {
    for (let i = 0; i < products.length; i += 1) {
        if (products[i].name == chosenProducts)
            return products[i].img;
    }
    return null;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice += products[i].price;
        }
    }
    return Math.round(totalPrice * 100) / 100;
}