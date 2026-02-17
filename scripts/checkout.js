import { cart } from "./cart.js";

let allProducts = [];

const fetchProducts = async () => {
    const api = 'https://fakestoreapi.com/products';
    const res = await fetch(api);
    allProducts = await res.json();

    console.log("Products Loaded", allProducts);

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

        console.log(matchingProducts);

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
                        <button class="text-gray-400 hover:text-red-500 transition">
                            <svg xmlns="http://www.w3.org" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex justify-between items-center mt-6">
                        <div class="flex items-center border border-gray-200 rounded-lg">
                            <button class="px-3 py-1 hover:bg-gray-50 text-gray-600">-</button>
                            <span class="px-4 font-semibold text-gray-800">${cartItem.quantity}</span>
                            <button class="px-3 py-1 hover:bg-gray-50 text-gray-600">+</button>
                        </div>
                        <span class="text-xl font-bold text-gray-900">$${matchingProducts.price}</span>
                    </div>
                </div>
            </div>
        `
    });


    document.querySelector('.js-cart-product').innerHTML = cartSummaryHTML;
}