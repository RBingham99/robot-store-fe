import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const {product} = props;

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