// selecting all neccessary tags 
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

//selecting tab element
const dashboard = document.getElementById('zero');
const order_info = document.getElementById('one');
const product_container = document.getElementById('two');
const add_product = document.getElementById('three');

menu.addEventListener('click', () => {
  if (sidebar.style.display == "flex") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "flex";
    body.classList.add('screen-overlay', 'show')
  }

})

body.addEventListener('click', () => {
  body.classList.remove('screen-overlay', 'show')
  sidebar.style.display = "none";
})
let activeIndex;


shrinkBtn.addEventListener("click", () => {

  document.body.classList.toggle("shrink");
  setTimeout(style_activeTab, 400);
  shrinkBtn.classList.add("hovered");
  // arrow function
  setTimeout(() => shrinkBtn.classList.remove("hovered"), 500);
});


/*
 when the search button is clicked
  1. remove a class list shrink if shrink is applied
  2. make last child of search element focus
*/
search.addEventListener("click", () => {

  document.body.classList.remove("shrink");
  search.lastElementChild.focus();
});


//changes styling of tabs when status active is changed
function style_activeTab() {
  let from_top = activeIndex * 58 + 2.5;
  active_tab.style.top = `${from_top}px`;
}


function changeLink() {

  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");


  old_tab = activeIndex
  activeIndex = this.dataset.active;

  if (old_tab != undefined) {
    if(old_tab==0)
      dashboard.style.display="none";
    else if (old_tab==1)
      product_container.style.display = "none";
    else if (old_tab==2)
      order_info.style.display = "none"

      if(activeIndex==0)
        dashboard.style.display = "block";
      else if (activeIndex==1)
        product_container.style.display = "block";
      else if (activeIndex==2)
        order_info.style.display = "block"
  }
  style_activeTab();



}

// when sidebar links are clicked change the styling
sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

// for each link elements
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



function showTabs() {
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const sidebar = button.parentElement;
      const tabs = sidebar.parentElement;
    })
  })
}
