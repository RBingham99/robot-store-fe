import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ProductPage = (props) => {

    const {id} = useParams();

    const [product, setProduct] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3000/products/${id}`);

        if (!response.ok) {
            throw new Error('Data could not be fetched');
        }
        return await response.json();
    }

    useEffect(() => {
        fetchData()
            .then((productData) => {
                setProduct(productData[0]);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className='row m-3'>
            <img className='col-sm-6'
                src={product.image}
                 alt={product.character + " " + product.category}
            />
            <div className='col-sm-6 d-flex flex-column'>
                <h1 className='m-2 py-2'>{product.title}</h1>
                <h2 className='m-2 py-2'>${product.price}.00</h2>
                <p className='m-2 py-2'>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductPage;