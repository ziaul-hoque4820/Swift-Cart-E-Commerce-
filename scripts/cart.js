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

export const removeFrmoCart = (productId) => {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

export const increaseQuantity = (productId) => {
    cart.forEach(cartItem => {
        if(cartItem.productId === productId){
            cartItem.quantity += 1;
        }
    });
    saveToStorage();
}