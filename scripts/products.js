import { productCartDetails } from "./ui-functions.js";

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