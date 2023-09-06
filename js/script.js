const {
    active
} = {
    active: 'active'
}

const menuItemMobile = document.querySelector('.menu-item-mobile');
const mobileMenBoard = document.querySelector('.mobile-menu-board');

mobileMenBoard.addEventListener('click', function (){
    if(this.classList.contains(active)){
        this.classList.remove(active);
        menuItemMobile.classList.remove(active);
        document.body.style.overflow = null;
    } else {
        this.classList.add(active);
        menuItemMobile.classList.add(active);
        document.body.style.overflow = 'hidden';
    }
})

const menu_item_mobile_teg = document.querySelector('.menu-item-mobile-teg')
const menu_ItemMobile = document.querySelector('.menu-item-mobile');

menu_item_mobile_teg.addEventListener('click', function (){
    menu_ItemMobile.classList.remove(active);
})

const sliders = document.querySelectorAll('.splide');

if(sliders.length){
    new Splide( '.splide', {
        type   : 'loop',
        perPage: 7,
        pagination: false,
        breakpoints: {
            1100: {
                perPage: 5,
            },
            768: {
                perPage: 3,
            },
            500: {
                perPage: 2,
            },
            400: {
                perPage: 1,
            },
        }
    } ).mount();
}



const imagesSliderProductBlock = document.querySelector('.product-image-block');

const ArrImagesUrl = imagesSliderProductBlock.dataset.images.split(',')
let sliderCount = 0;

const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click', function (){
    if(sliderCount === 0){
        sliderCount = ArrImagesUrl.length;
    }
    sliderCount--;

    imagesSliderProductBlock.style.backgroundImage = `url(${ArrImagesUrl[sliderCount]})`;

})

next.addEventListener('click', function (){
    if(sliderCount === ArrImagesUrl.length - 1){
        sliderCount = 0;
    }
    sliderCount++;
    console.log(sliderCount)

    imagesSliderProductBlock.style.backgroundImage = `url(${ArrImagesUrl[sliderCount]})`;

})


console.log(ArrImagesUrl)

const modalImage = document.querySelector('.modal-body .image')
const btnOpenImg = document.querySelector('.arrows-up-down')
const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})


btnOpenImg.addEventListener('click', ()=>{
    myModal.show()
        modalImage.style.backgroundImage = `url(${ArrImagesUrl[sliderCount]})`;
})