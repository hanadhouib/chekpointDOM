var btnPlus = document.querySelectorAll(".plus");

for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", increment);
}

function increment(event) {
  var cible = event.target;
  var par = cible.parentElement;
  var count = Number(par.querySelector("p").innerHTML);
  count++;
  par.querySelector("p").innerHTML = count;
  var tr = par.parentElement.parentElement;
  var unitpprice = Number(tr.querySelector(".unitPrice").innerHTML);
  price = count * unitpprice;
  tr.querySelector(".price").innerHTML = price;
  Total();
}

var btnMoins = document.querySelectorAll(".minus");

for (let i = 0; i < btnMoins.length; i++) {
  btnMoins[i].addEventListener("click", decrement);
}

function decrement(event) {
  var cible = event.target;
  var par = cible.parentElement;
  var count = Number(par.querySelector("p").innerHTML);
  count--;
  if (count < 0) {
    count = 0;
  }
  par.querySelector("p").innerHTML = count;
  var tr = par.parentElement.parentElement;
  var unitpprice = Number(tr.querySelector(".unitPrice").innerHTML);
  price = count * unitpprice;
  tr.querySelector(".price").innerHTML = price;
  Total();
}

var prices = document.querySelectorAll(".price");
function Total() {
  var Total = 0;
  for (let i = 0; i < prices.length; i++) {
    Total += Number(prices[i].innerHTML);
    document.querySelector("#total").innerHTML = Total;
  }
}

var btndel = document.querySelectorAll(".delete");

for (let i = 0; i < btndel.length; i++) {
  btndel[i].addEventListener("click", del);
}

function del(event) {
  var cible = event.target;
  var tr = cible.parentElement.parentElement.parentElement.parentElement;
  tr.querySelector("p").innerHTML = 0;
  tr.querySelector(".price").innerHTML = 0;
  Total();
}

var btnlike = document.querySelectorAll(".like");

for (let i = 0; i < btnlike.length; i++) {
  btnlike[i].addEventListener("click", like);
}

function like(event) {
  var cible = event.target;
  var parent = cible.parentElement;
  if (cible.style.color != "red") {
    cible.style.color = "red";
  } else {
    cible.style.color = "#424242";
  }
}