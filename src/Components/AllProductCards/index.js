import {useEffect, useState} from "react";
import ProductCard from "../ProductCard"

const AllProductCards = () => {

    const [allProducts, setAllProducts] = useState([]);

    let apronCheckbox = document.querySelector('#Aprons');
    let hatCheckbox = document.querySelector('#Hats');
    let mugCheckbox = document.querySelector('#Mugs');
    let shirtCheckbox = document.querySelector('#Shirts');

    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/products');

        if (!response.ok) {
            throw new Error('Data could not be fetched');
        }

        return await response.json();
    }

    useEffect(() => {
        fetchData()
            .then((allProductsData) => {
                setAllProducts(allProductsData);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    let aprons = [];
    let hats = [];
    let mugs = [];
    let shirts = [];
    let selectedProducts = [];

    for (let product of allProducts) {
        if (product.category_id === 1) {
            aprons.push(product);
        } else if (product.category_id === 2) {
            hats.push(product);
        } else if (product.category_id === 3) {
            mugs.push(product);
        } else {
            shirts.push(product);
        }
    }

    const Checkbox = () => {
        const handleChange = () => {
            if (apronCheckbox.checked) {
                for (let product of aprons) {
                    selectedProducts.push(product)
                }
            }
            if (hatCheckbox.checked) {
                for (let product of hats) {
                    selectedProducts.push(product)
                }
            }
            if (mugCheckbox.checked) {
                for (let product of mugs) {
                    selectedProducts.push(product)
                }
            }
            if (shirtCheckbox.checked) {
                for (let product of shirts) {
                    selectedProducts.push(product)
                }
            }
        }
    }

    console.log(selectedProducts)

    return (
        <div className='row'>
            {selectedProducts.map((product, index) => {
                return (
                    <div className='col-6 col-sm-4 col-md-3 col-md-2 mb-3' key={index}>
                        <ProductCard product={product} />
                    </div>
                );
            })}
        </div>
    );
}

export default AllProductCards;