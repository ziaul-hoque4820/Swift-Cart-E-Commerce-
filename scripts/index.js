import { addToCart, updateCartQuantity } from "./cart.js";
import { fetchSingleProduct, productCartDetails } from "./ui-functions.js";

updateCartQuantity();

const homePageProducts = (limit) => {
    const spinner = document.querySelector('.js-spinner');
    const jsProduct = document.querySelector('.js-products');
    spinner.classList.remove('hidden');
    jsProduct.classList.add('hidden');

    let api = `https://fakestoreapi.com/products?limit=${limit}`

    fetch(api)
        .then((res) => res.json())
        .then((data) => trandingProducts(data))

    spinner.classList.add('hidden');
    jsProduct.classList.remove('hidden');
};


const trandingProducts = (data) => {
    productCartDetails(data)
}

homePageProducts(3)


document.getElementById('close-modal').addEventListener('click', () => {
    const modal = document.getElementById('product-modal');

    modal.classList.add('hidden');
    modal.classList.remove('flex');
});

const handleAddToCart = (id) => {
    addToCart(id);
    updateCartQuantity();
}

window.handleAddToCart = handleAddToCart;
window.fetchSingleProduct = fetchSingleProduct;