const productList = document.querySelector('.product-listing');

allEventListerns();

function allEventListerns() {
  window.addEventListener("DOMContentLoaded", () => {
    loadJSON();
  });
}

// loadJson
function loadJSON() {
  fetch("product.json")
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      data.forEach((product) => {
        html += `
        <div class="listing-item">
        <picture class="product-img">
            <img src="${product.img}" alt=""> 
        </picture>
        <div class="details">
            <div class="product-name">
                <span>${product.name}</span>
            </div>
            <div class="product-make">
                <span>${product.model}</span>
            </div>
            <div class="product-rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                4.5</div>
            <div class="product-price">
                <span>$${product.price}</span>
            </div>
        </div>
        <div class="buy-btn">
            <button class = "buy_now"><span class="add-cart">BUY NOW</span></button><br>
        </div>
    </div>


      `;
      });
      productList.innerHTML = html;
    });
}