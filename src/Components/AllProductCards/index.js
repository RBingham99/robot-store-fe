import {useEffect, useState} from "react";
import ProductCard from "../ProductCard"

const AllProductCards = () => {

    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/products');
        console.log(response);

        if (!response.ok) {
            throw new Error('Data could not be fetched');
        }

        return await response.json();
    }

    useEffect(() => {
        fetchData()
            .then((productsData) => {
                setProducts(productsData);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div>

        </div>
    );
}

export default AllProductCards;