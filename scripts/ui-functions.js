export const fetchSingleProduct = (id) => {
    const api = `https://fakestoreapi.com/products/${id}`

    fetch(api)
        .then((res) => res.json())
        .then((data) => showProductDetails(data));
}

const showProductDetails = (product) => {
    console.log(product);
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="flex items-center justify-center bg-gray-50 rounded-xl p-4">
            <img src="${product.image}" alt="${product.title}" class="max-h-64 object-contain">
        </div>
        <div>
            <span class="text-indigo-600 text-xs font-bold uppercase tracking-wider">${product.category}</span>
            <h2 class="text-2xl font-bold text-gray-800 my-2">${product.title}</h2>
            <div class="flex items-center gap-2 mb-4">
                <span class="text-yellow-400 text-lg">★ ${product.rating.rate}</span>
                <span class="text-gray-400 text-sm">(${product.rating.count} reviews)</span>
            </div>
            <p class="text-gray-600 leading-relaxed mb-6">${product.description}</p>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900">$${product.price}</span>
                <button
                onClick="handleAddToCart(${product.id})"
                class="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">Add to Cart</button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

export const productCartDetails = (data) => {
    let productsHTML = "";

    console.log(data);

    data.forEach(product => {
        productsHTML += `
            <div class="border rounded-xl p-4 group">
                <div class="h-64 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img src=${product.image} class="h-48 group-hover:scale-110 transition duration-300"
                        alt="Backpack">
                </div>
                <span class="text-blue-500 text-xs font-bold uppercase">${product.category}</span>
                <h3 class="font-bold text-gray-800 truncate mb-1">${product.title}</h3>
                <div class="flex items-center gap-1 text-yellow-400 text-sm mb-2">
                    <span>★ ${product.rating.rate} (${product.rating.count})</span>
                </div>
                <p class="text-xl font-bold text-gray-900 mb-4">$${product.price}</p>
                <div class="flex gap-2">
                    <button
                        onClick="fetchSingleProduct(${product.id})"
                        class="flex-1 border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition">Details</button>
                    <button
                        onClick="handleAddToCart(${product.id})"
                        class="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-800 transition cursor-pointer">Add</button>
                </div>
            </div>
        `

        document.querySelector('.js-products').innerHTML = productsHTML;
    });
}