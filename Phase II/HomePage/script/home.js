let addToCart = document.getElementsByClassName("add-cart");
let Count = 0;

for (let i in addToCart) {
  addToCart[i].onclick = function () {
    Count += 1;
    setCartCounter(Count);
  };
}

function setCartCounter(totalCount) {
  // cart-item-number
  document.querySelector(".cart-icon-number").innerText = totalCount;
}

let spanSlide = document.getElementsByClassName("slide-icon");
let product = document.getElementsByClassName("product-detail-top");
let productSec = document.getElementsByClassName("second");
let product_page = Math.ceil(product.length / 2);
let product_page_sec = Math.ceil(productSec.length / 2);

spanSlide[0].addEventListener('click',left_mover);
spanSlide[1].addEventListener('click',right_mover);
spanSlide[2].addEventListener('click',left_mover2);
spanSlide[3].addEventListener('click',right_mover2);
spanSlide[4].addEventListener('click',left_mover3);
spanSlide[5].addEventListener('click',right_mover3);
spanSlide[6].addEventListener('click',left_mover4);
spanSlide[7].addEventListener('click',right_mover4);

let l = 0;
let movePer = 20;
let maxMove = 50;

function right_mover() {
  l = l + movePer;
  if (product == 1) {
    l = 0;
  }
  for (const i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
}
function left_mover() {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
}
// spanSlide[1].onclick = () => {
//   right_mover();
// };
// spanSlide[0].onclick = () => {
//   left_mover();
// };
let s = 0;
let movePer2 = 20;
let maxMove2 = 50;

function right_mover2() {
  s = s + movePer2;
  if (productSec == 1) {
    s = 0;
  }
  for (const i of productSec) {
    if (s > maxMove2) {
      s = s - movePer2;
    }
    i.style.left = "-" + s + "%";
  }
}
function left_mover2() {
  s = s - movePer2;
  if (s <= 0) {
    s = 0;
  }
  for (const i of productSec) {
    if (product_page_sec > 1) {
      i.style.left = "-" + s + "%";
    }
  }
}
//slide 3
let productSec3 = document.getElementsByClassName("third");
let product_page_sec3 = Math.ceil(productSec3.length / 2);
let z = 0;
let movePer3 = 20;
let maxMove3 = 50;

function right_mover3() {
  z = z + movePer3;
  if (productSec == 1) {
    z = 0;
  }
  for (const i of productSec3) {
    if (z > maxMove3) {
      z = z - movePer3;
    }
    i.style.left = "-" + z + "%";
  }
}
function left_mover3() {
  z = z - movePer3;
  if (z <= 0) {
    z = 0;
  }
  for (const i of productSec3) {
    if (product_page_sec3 > 1) {
      i.style.left = "-" + z + "%";
    }
  }
}
//slide 4
let productSec4 = document.getElementsByClassName("fourth");
let product_page_sec4 = Math.ceil(productSec4.length / 2);
let y = 0;
let movePer4 = 20;
let maxMove4 = 50;

function right_mover4() {
  y= y+ movePer4;
  if (productSec4 == 1) {
    y= 0;
  }
  for (const i of productSec4) {
    if (y> maxMove4) {
      y= y- movePer4;
    }
    i.style.left = "-" + y+ "%";
  }
}
function left_mover4() {
  y= y- movePer4;
  if (y<= 0) {
    y= 0;
  }
  for (const i of productSec4) {
    if (product_page_sec4 > 1) {
      i.style.left = "-" + y+ "%";
    }
  }
}
