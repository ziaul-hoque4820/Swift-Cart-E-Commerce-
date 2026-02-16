import { addToCart, updateCartQuantity } from "./cart.js";
import { fetchSingleProduct, productCartDetails } from "./ui-functions.js";


const homePageProducts = (limit) => {
    let api = `https://fakestoreapi.com/products?limit=${limit}`

    fetch(api)
        .then((res) => res.json())
        .then((data) => trandingProducts(data))
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