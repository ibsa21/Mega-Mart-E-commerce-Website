//select 
const shrinkBtn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const list_elements = document.querySelectorAll(".list-element");
let button = document.querySelector('button');
const menu = document.getElementById('menu')
const sidebar = document.getElementById('sidebar')
const body = document.querySelector('b')
const main = document.querySelector('a')

// select tab elements
const dashboard = document.getElementById('zero');
const product_container = document.getElementById('one');
const order_info = document.getElementById('two');
const add_product = document.getElementById('three');
const add_product_link = document.getElementById('add')

//navigation menu clicked toggle between display flex and none
menu.addEventListener('click', () => {
  if (sidebar.style.display == "flex") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "flex";
    body.classList.add('screen-overlay', 'show')
  }

})

// add screen-overlay feature
body.addEventListener('click', () => {
  body.classList.remove('screen-overlay', 'show')
  sidebar.style.display = "none";
})
let activeIndex;


// shrink sidebar navigation 
shrinkBtn.addEventListener("click", () => {

  document.body.classList.toggle("shrink");
  setTimeout(style_activeTab, 400);
  shrinkBtn.classList.add("hovered");

  setTimeout(() => shrinkBtn.classList.remove("hovered"), 500);
});

//make sidebar bigger again upon click of search button
search.addEventListener("click", () => {

  document.body.classList.remove("shrink");
  search.lastElementChild.focus();
});

// apply style to sidebar tab based on it's distance from top
function style_activeTab() {
  let from_top = activeIndex * 58 + 2.5;
  active_tab.style.top = `${from_top}px`;
}

// change active tab style
function changeLink() {

  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  add_product.style.display = "none";
  this.classList.add("active");


  old_tab = activeIndex;
  if (old_tab == undefined)
    old_tab = 0
  activeIndex = this.dataset.active;

  change_tab(old_tab, activeIndex);
  style_activeTab();
}


sidebar_links.forEach((link) => link.addEventListener("click", changeLink));


function showListStyle() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");

  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

list_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showListStyle);
});

// toggle between tabs
function change_tab(old_tab, activeIndex) {
  console.log("hello")
  if (activeIndex != old_tab) {

    if (old_tab == 0)
      dashboard.style.display = "none";
    else if (old_tab == 1)
      product_container.style.display = "none";
    else if (old_tab == 2)
      order_info.style.display = "none"


    if (activeIndex == 0)
      dashboard.style.display = "block";
    else if (activeIndex == 1)
      product_container.style.display = "block";
    else if (activeIndex == 2)
      order_info.style.display = "block"
    else if (activeIndex == 3)
      add_product.style.display = "block"
  }
}

add_product_link.addEventListener('click', () => { change_tab(1, 3) });
