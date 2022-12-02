import { Link} from "react-router-dom";

const ProductCard = (props) => {
    const {product} = props;

    const getProduct = () => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/products/');

            if (!response.ok) {
                throw new Error('Data could not be fetched');
            }
            return await response.json();
        }
    }

    return (
        <div>
            <Link to={'/products/' + product.id}>
            <img
                src={product.image}
                className='img-fluid'
                alt={product.character + " " + product.category}
            />
            <h4>{product.title}</h4>
            <br/>
            <h2>${product.price}.00</h2>
            </Link>
        </div>
    )
}

export default ProductCard;