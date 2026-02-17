import { cart, decreaseQuantity, increaseQuantity, removeFrmoCart } from "./cart.js";

let allProducts = [];

const fetchProducts = async () => {
    const spinner = document.querySelector('.js-spinner');
    const jsProduct = document.querySelector('.js-cart-product');
    spinner.classList.remove('hidden');
    jsProduct.classList.add('hidden');

    const api = 'https://fakestoreapi.com/products';
    const res = await fetch(api);
    allProducts = await res.json();

    // console.log("Products Loaded", allProducts);

    spinner.classList.add('hidden');
    jsProduct.classList.remove('hidden');
    renderOrderSummary();

}
fetchProducts()

const getProducts = (productId) => {
    return allProducts.find(product => product.id === productId)
}

const renderOrderSummary = () => {
    let cartSummaryHTML = "";

    cart.forEach((cartItem) => {
        const productId = cartItem.productId;

        const matchingProducts = getProducts(productId);

        // console.log(matchingProducts);

        cartSummaryHTML += `
            <div
                class="flex items-center bg-gray-200 p-6 rounded-2xl shadow-sm border border-gray-100 transition hover:shadow-md">
                <div class="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden">
                    <img src=${matchingProducts.image} alt="Product" class="w-full h-full object-contain p-2">
                </div>
                <div class="ml-6 flex-1">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-lg font-bold text-gray-800">
                                ${matchingProducts.title}
                            </h3>
                            <p class="text-sm text-gray-500 mt-1 uppercase tracking-wide">${matchingProducts.category}</p>
                        </div>
                        <button
                        onClick="handleDeleteCartProcuct(${matchingProducts.id})"
                        class="text-gray-400 hover:text-red-500 transition">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <div class="flex justify-between items-center mt-6">
                        <div class="flex items-center border border-gray-200 rounded-lg">
                            <button
                            onClick="handelDecrease(${matchingProducts.id})"
                             class="px-3 py-1 hover:bg-gray-50 text-gray-600 ${cartItem.quantity === 1 ? 'opacity-40 cursor-not-allowed' : ''}">-</button>
                            <span class="px-4 font-semibold text-gray-800">${cartItem.quantity}</span>
                            <button 
                            onClick="handleIncrease(${matchingProducts.id})"
                            class="px-3 py-1 hover:bg-gray-50 text-gray-600">+</button>
                        </div>
                        <span class="text-xl font-bold text-gray-900">$${matchingProducts.price}</span>
                    </div>
                </div>
            </div>
        `
    });


    document.querySelector('.js-cart-product').innerHTML = cartSummaryHTML;
}

const handleDeleteCartProcuct = (productId) => {
    removeFrmoCart(productId);
    renderOrderSummary();
}

const handleIncrease = (productId) => {
    increaseQuantity(productId);
    renderOrderSummary();
}

const handelDecrease = (productId) => {
    decreaseQuantity(productId);
    renderOrderSummary();
}

window.handleDeleteCartProcuct = handleDeleteCartProcuct;
window.handleIncrease = handleIncrease;
window.handelDecrease = handelDecrease;