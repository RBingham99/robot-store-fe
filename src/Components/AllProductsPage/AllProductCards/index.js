import {useEffect, useState} from "react";
import ProductCard from "../ProductCard"

const AllProductCards = (props) => {
    const {checkboxState} = props;

    const [allProducts, setAllProducts] = useState([]);

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

    let selectedProducts = allProducts;

    if (!checkboxState['Aprons']) {
            selectedProducts = selectedProducts.filter(product => {
                return product.category_id !== 1
            })
    }
    if (!checkboxState['Hats']) {
            selectedProducts = selectedProducts.filter(product => {
                return product.category_id !== 2
            })
    }
    if (!checkboxState['Mugs']) {
            selectedProducts = selectedProducts.filter(product => {
                return product.category_id !== 3
            })
    }
    if (!checkboxState['Shirts']) {
            selectedProducts = selectedProducts.filter(product => {
                return product.category_id !== 4
            })
    }
    if (!checkboxState['Fred']) {
            selectedProducts = selectedProducts.filter(product => {
                return product.character_id !== 1
            })
    }
    if (!checkboxState['Bubbles']) {
            selectedProducts = selectedProducts.filter(product => {
                return product.character_id !== 2
            })
    }
    if (!checkboxState['Dolores']) {
            selectedProducts = selectedProducts.filter(product => {
                return product.character_id !== 3
            })
    }
    if (!checkboxState['Rex']) {
            selectedProducts = selectedProducts.filter(product => {
                return product.character_id !== 4
            })
    }

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