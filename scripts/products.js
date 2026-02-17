import { addToCart, updateCartQuantity } from "./cart.js";
import { fetchSingleProduct, productCartDetails } from "./ui-functions.js";

const loadProducts = (category = "all") => {
    let api = `https://fakestoreapi.com/products`;
    if (category !== 'all') {
        api = `https://fakestoreapi.com/products/category/${category.toLowerCase()}`
    }

    fetch(api)
        .then((res) => res.json())
        .then((data) => productCartDetails(data))
};

// const ourProducts = (data) => {
//     productCartDetails(data);
// }

document.getElementById('close-modal').addEventListener('click', () => {
    const modal = document.getElementById('product-modal');

    modal.classList.add('hidden');
    modal.classList.remove('flex');
});

const handleAddToCart = (id) => {
    addToCart(id);
    updateCartQuantity();
}

const handleCategoryClick = (event) => {
    const clickBtn = event.target;

    if(clickBtn.tagName !== 'BUTTON') return;

    const category = clickBtn.innerText.trim().toLowerCase();
    
    document.querySelectorAll('.js-category button').forEach(btn => {
        btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
        btn.classList.add('border', 'border-gray-200', 'text-white');
    });

    clickBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-md')
    clickBtn.classList.remove('border', 'border-gray-200');

    loadProducts(category);
}

document.querySelector('.js-category').addEventListener('click', handleCategoryClick);

loadProducts();

window.handleAddToCart = handleAddToCart;
window.fetchSingleProduct = fetchSingleProduct;