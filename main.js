// top
 // Create a new div element
 const newDiv = document.createElement('div');
 newDiv.className = 'flex items-center h-14 bg-black text-white justify-center';

 // Create a new p element
 const newP = document.createElement('p');
 newP.className = 'blink-text hover:underline cursor-pointer';
 newP.textContent = 'MTW Limited Offer for $12.99';

 // Append the p element to the div
 newDiv.appendChild(newP);

const topBanner = document.getElementById('top-banner');
topBanner.appendChild(newDiv);

//top-popup

const popupText = document.createElement('p');
 popupText.textContent = "reveal";
const topPopup = document.getElementById('top-popup');
topPopup.appendChild(popupText)
topPopup.className += 'block bg-gray-200 z-50 bg-opacity-80 w-full fixed top-0 text-red-600 h-screen overflow-hidden z-50 hidden flex flex-col justify-center items-center';
const handlePopupClick = () =>{
  topPopup.classList.add('hidden');
 
}
topPopup.addEventListener('click',handlePopupClick)


// banner pop-up
const blinkElement = document.querySelector(".blink-text");

blinkElement.style.cursor='pointer';
const handleMouseOver = () => {
  blinkElement.classList.remove('blink-text');
  blinkElement.classList.add('underline');
  
};

const handleMouseOut = () => {
  blinkElement.classList.add('blink-text');
  blinkElement.classList.remove('underline');
  };
  const handleClick = () =>{
    topPopup.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
  
  blinkElement.addEventListener('mouseover', handleMouseOver);
  blinkElement.addEventListener('mouseout', handleMouseOut);
  blinkElement.addEventListener('click', handleClick);
  
// carousel

const carousels = document.querySelectorAll(".pictures-carousel")
carousels.forEach(carousel => {
    const carouselInner = carousel.querySelector(".pictures-carousel div"); // inner div
    const carouselContent = Array.from(carouselInner.children);  // images
    carouselContent.forEach(item=>{
        const duplicateItem = item.cloneNode(true);
        carouselInner.appendChild(duplicateItem);
     
    });
});