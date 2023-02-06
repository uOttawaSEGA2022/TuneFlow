/*
const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach(el => {
        el.style.transform ='translate(calc(-50% + ${xValue}px), calc(-50% + ${yValue}px))';
    })
});
*/
let el1 = document.getElementById('parallax1');
let el2 = document.getElementById('parallax2');

/*
function parallax(){
    el1.style.transform = 'translate(50%, 30%)';
    el1.style.transition = "3s";
    el2.style.transform = 'translate(-30%, 30%)';
    el2.style.transition = "3s";
}
*/

function parallax(){
    el1.style.transform = 'translate(-60%, 15%)';
    el1.style.transition = "5s";
    
    el2.style.transform = 'translate(100%, 30%)';
    el2.style.transition = "5s";

}

var tabs = document.querySelectorAll(".tabs_wrap ul li");
var home = document.querySelectorAll(".home");
var products = document.querySelectorAll(".products");
var cart = document.querySelectorAll(".cart")

tabs.forEach((tab)=>{
  tab.addEventListener("click", ()=>{
    tabs.forEach((tab)=>{
      tab.classList.remove("active");
    })
    tab.classList.add("active");
    var tabval = tab.getAttribute("data-tabs");

    if(tabval == "home"){
      home.forEach((home)=>{
        home.style.display = "block";
      })
    }
    else if(tabval == "products"){
      products.forEach((products)=>{
        products.style.display = "block";
      })
    }
    else if(tabval == "cart"){
      cart.forEach((cart)=>{
        cart.style.display = "block";
      })
    }

  })
})