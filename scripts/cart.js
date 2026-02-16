export let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveToStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const addToCart = (productId) => {
    let matchingProduct;

    cart.forEach(cartItem => {
        if (productId === cartItem.productId) {
            matchingProduct = cartItem;
        }
    });

    if (matchingProduct) {
        matchingProduct.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        })
    }

    saveToStorage();
}


export const updateCartQuantity = () => {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}