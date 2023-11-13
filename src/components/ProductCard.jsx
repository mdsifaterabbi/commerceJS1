import { Link } from "react-router-dom";

const ProductCard = ({ productInfo }) => {

    const { name, description, image, price, id } = productInfo;

    console.log(image.url);

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={image.url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price.formatted_with_symbol}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-sm">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default ProductCard