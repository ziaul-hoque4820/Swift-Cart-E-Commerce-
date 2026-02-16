const homePageProducts = (limit) => {
    let api = `https://fakestoreapi.com/products?limit=${limit}`

    fetch(api)
        .then((res) => res.json())
        .then((data) => trandingProducts(data))
};


const trandingProducts = (data) => {
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
                        class="flex-1 border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition">Details</button>
                    <button
                        class="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-800 transition cursor-pointer">Add</button>
                </div>
            </div>
        `

        document.querySelector('.js-trending-products').innerHTML = productsHTML;    
    });
}

homePageProducts(3)