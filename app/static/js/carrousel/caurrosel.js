imgCarrousel = [
    "/img/img vinos/bonarda.png",
    "/img/img vinos/chardonay.png",
    "/img/img vinos/malbec.png",
    "/img/img vinos/merlot.png",
    "/img/img vinos/petitverdot.png", 
    "/img/img vinos/1_VIEJO SABIO MALBEC.jpg",
    "/img/img vinos/2_VIEJO SABIO PETIT.jpg",
    "/img/img vinos/3_VIEJO SABIO MERLOT.jpg"
]
    
let currentIndex = 0;
const visibleImages = 5;
const totalImages = imgCarrousel.length;

const boxImg = document.getElementById('box-img')

function showImages() {
    boxImg.innerHTML = '';

    for (let i = currentIndex; i < currentIndex + visibleImages && i < totalImages; i++){
        const imgElement = document.createElement('img');
        imgElement.src = imgCarrousel[i];
        boxImg.appendChild(imgElement);
    }
}

// Buttons

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex + visibleImages < totalImages) {
        currentIndex += 1; 
        showImages(); 
    }
})

document.querySelector('.back').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;  
        showImages();  
    }
});

showImages();