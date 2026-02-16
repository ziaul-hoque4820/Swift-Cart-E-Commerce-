import { addToCart, updateCartQuantity } from "./cart.js";
import { fetchSingleProduct, productCartDetails } from "./ui-functions.js";

const allProducts = () => {
    let api = `https://fakestoreapi.com/products?limit`

    fetch(api)
        .then((res) => res.json())
        .then((data) => ourProducts(data))
};

const ourProducts = (data) => {
    productCartDetails(data);
}

allProducts();

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