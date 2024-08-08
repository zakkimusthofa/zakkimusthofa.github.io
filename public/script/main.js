const humberger = document.getElementById('aMenu');
const menu = document.querySelector('.navbar-menu');

humberger.addEventListener('click', (e) => {
    menu.classList.toggle('activeT')
    e.preventDefault();
})

document.addEventListener('click', (e) => {
    if(!humberger.contains(e.target) && !menu.contains(e.target)){
        menu.classList.remove('activeT');
    }
})
// let keranjangProduct = document.getElementById('shopping-cart')
// const displayCart = document.querySelector('.cart-shop')

// keranjangProduct.addEventListener('click', (e) => {
// 	displayCart.classList.toggle('activeT')
// 	e.preventDefault()
// })