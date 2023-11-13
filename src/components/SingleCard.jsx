import { Link } from "react-router-dom"

const SingleCard = ({ singleInfo }) => {

    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={singleInfo.image.url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleInfo.name}</h2>
                    <p>{singleInfo.price.formatted_with_symbol}</p>
                    <p>{singleInfo.description}</p>
                </div>
                <div className="flex flex-row flex-wrap justify-end">
                    <Link to="/home">
                        <button className="btn btn-success">Back</button>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default SingleCard