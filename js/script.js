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
