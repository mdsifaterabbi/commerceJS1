import { useEffect, useState } from "react";
import Layout from "../Layout/Layout"
import Commerce from "@chec/commerce.js";
import SingleCard from "../components/SingleCard";
import { useParams } from "react-router-dom";
import myLoading_2 from '../assets/myLoading_2.gif'

const SingleDetails = () => {

    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    //console.log(id);

    const [getSingleDetails, setSingleDetails] = useState([]);

    const fetchSingleData = async () => {

        try {
            const commerce = new Commerce('pk_54947260aa193e44285ef54d4e0e25edd93c0c92c0f99');
            const response = await commerce.products.list();
            const productData = response.data;
            // const filteredProducts = productData.filter(product => product.id === 'prod_8XO3wp78VAlYAz');

            const filteredProducts = productData.filter(product => product.id === `${id}`);

            const detailedProducts = filteredProducts.map(product => {
                const { id, name, description, price, image } = product;
                return {
                    id,
                    name,
                    description,
                    price,
                    image,
                };
            });

            return setSingleDetails(detailedProducts);

        }

        catch (error) {
            console.error('Error fetching product details:', error);
        } finally {
            setIsLoading(false);
        }


    }

    useEffect(() => {
        fetchSingleData();
    }, [id])

    if (isLoading) {
        return (<div className="loading-indicator">
            <div className="w-[100vw] h-[100vh] pt-[35vh] pl-[42vw]">
                <img src={myLoading_2} alt="loading image" style={{ width: '200px' }}></img>
            </div>

        </div>);
    }

    if (!getSingleDetails) {
        return <div>Product not found</div>;
    }



    return (
        <>
            <Layout title={'details'}>

                <div>Single Details</div>
                <div>
                    {
                        getSingleDetails.map(mySingleData => <SingleCard key={mySingleData.id} singleInfo={mySingleData} />)
                    }
                </div>

            </Layout>
        </>

    )
}

export default SingleDetails