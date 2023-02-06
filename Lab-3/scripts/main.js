// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

// Not optimal but it is functional
function onLoadFunction() {
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 1; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
}


function openInfo(evt, tabName) {

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}



// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var chosenRestrictions = [];

    for (i = 0; i < s1.length; i++) {
        if (s1[i].checked) {
            chosenRestrictions.push(s1[i].value);
        }
    }

    // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

    var v = document.createElement('veggies');
    v.innerHTML = "";
	v.style.fontSize = '15pt';
    v.appendChild(document.createElement("br"));
    v.appendChild(document.createTextNode("Veggies"));
    v.appendChild(document.createElement("br"));

    var f = document.createElement('fruit');
    f.innerHTML = "";
	f.style.fontSize = '15pt';
    f.appendChild(document.createElement("br"));
    f.appendChild(document.createTextNode("Fruit"));
    f.appendChild(document.createElement("br"));

    var m = document.createElement('meat');
    m.innerHTML = "";
	m.style.fontSize = '15pt';
    m.appendChild(document.createElement("br"));
    m.appendChild(document.createTextNode("Meat"));
    m.appendChild(document.createElement("br"));

    var o = document.createElement('other');
    o.innerHTML = "";
	o.style.fontSize = '15pt';
    o.appendChild(document.createElement("br"));
    o.appendChild(document.createTextNode("Other"));
    o.appendChild(document.createElement("br"));



    // obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, chosenRestrictions);
    var priceArray = restrictListPrices(products, chosenRestrictions);
    var typeArray = restrictListType(products, chosenRestrictions);

    // for each item in the array, create a checkbox element, each containing information such as:
    // <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>

    for (i = 0; i < optionArray.length; i++) {

        var productName = optionArray[i];
        var productPrice = priceArray[i].toString();
        var productType = typeArray[i];


        // create the checkbox and add in HTML DOM
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        checkbox.price = productPrice;

        if (productType == "v") {
            v.appendChild(checkbox);
        } else if (productType == "f") {
            f.appendChild(checkbox);
        } else if (productType == "m") {
            m.appendChild(checkbox);
        } else {
            o.appendChild(checkbox);
        }

        // create a label for the checkbox, and also add in HTML DOM

        var label = document.createElement('label');
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(" " + productName + " - $" + productPrice));
		const myImage = new Image(300,300);
        myImage.src = getProductImg(productName);

        if (productType == "v") {

			v.appendChild(label);
            v.appendChild(document.createElement("br"));

			// Img:
            v.appendChild(myImage);
            v.appendChild(document.createElement("br"));
			v.appendChild(document.createElement("br"));

        } else if (productType == "f") {

			f.appendChild(label);
            f.appendChild(document.createElement("br"));

			// Img:
            f.appendChild(myImage);
            f.appendChild(document.createElement("br"));
			f.appendChild(document.createElement("br"));
        } 
		else if (productType == "m") {

			m.appendChild(label);
            m.appendChild(document.createElement("br"));

			// Img:
            m.appendChild(myImage);
            m.appendChild(document.createElement("br"));
			m.appendChild(document.createElement("br"));

        } 
		else {

			o.appendChild(label);
            o.appendChild(document.createElement("br"));

			// Img:
            o.appendChild(myImage);
            o.appendChild(document.createElement("br"));
			o.appendChild(document.createElement("br"));
        }

    }


    s2.appendChild(v);
    s2.appendChild(f);
    s2.appendChild(m);
    o.appendChild(document.createElement("br"));
    s2.appendChild(o);
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

    var ele = document.getElementsByName("product");
    var chosenProducts = [];

    var eleQuatities = document.getElementsByName("quantity");
    var chosenProductQuatities = [];

    var c = document.getElementById('displayCart');
    c.innerHTML = "";

    // build list of selected item
    var para = document.createElement("P");
    para.innerHTML = "You selected : ";
    para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
			const myImage = new Image(100,100);
			myImage.src = getProductImg(ele[i].value);
			para.appendChild(myImage);
			para.appendChild(document.createElement("br"));
	

            para.appendChild(document.createTextNode(ele[i].value + " - $" + ele[i].price.toString()));
            chosenProducts.push(ele[i].value);
            para.appendChild(document.createElement("br"));
			para.appendChild(document.createElement("br"));
        }
    }

    // add paragraph and total price
    c.appendChild(para);
    para.appendChild(document.createElement("br"));
    para.appendChild(document.createElement("br"));
    c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));

}