
// Accordian Section
// Get all accordion header
const headers = document.querySelectorAll(".accordion-header");

// Add click event  listener to each accordion header
headers.forEach(header =>{
  header.addEventListener("click" ,function(){
    const activeItem = this.parentElement;
    const accordianItems = document.querySelectorAll(".accordion-item");
    accordianItems.forEach((Item)=>{
      if(Item !==activeItem){
        Item.querySelector(".accordion-content").style.display ="none";
        Item.querySelector(".accordion-icon").textContent="+"
      }
    })
    const content = activeItem.querySelector(".accordion-content");
    content.style.display =content.style.display === "none"?"block" : "none"
    const icon = activeItem.querySelector(".accordion-icon");
    icon.textContent==="+" ?icon.textContent="-":icon.textContent="+"
  } )
})

// Horizontal Scroll Cards
document.addEventListener('DOMContentLoaded', function() {
  const scrollContainer = document.querySelector('.scroll_container');
  const scrollCards = document.querySelector('.scroll_cards');
  const prevArrow = document.querySelector('.less_than');
  const nextArrow = document.querySelector('.greater_than');
  
  let currentIndex = 0;
  const cardWidth = scrollContainer.offsetWidth / 2;
  
  prevArrow.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      scrollCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  });
  
  nextArrow.addEventListener('click', function() {
    const numCards = scrollCards.children.length;
    if (currentIndex < numCards - 2) {
      currentIndex++;
      scrollCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  });
});

