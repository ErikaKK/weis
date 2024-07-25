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