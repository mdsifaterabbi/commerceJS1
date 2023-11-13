import { createContext, useEffect, useState } from "react";
import Commerce from "@chec/commerce.js";
import ProductsList from "../components/ProductsList";
import myLoading_2 from '../assets/myLoading_2.gif'

export const MyContextObj = createContext();

export const MyContextObjProvider = ({ children }) => {



    const [productDetails, setProductDetails] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const getAllProducts = async () => {

        try {
            const commerce = new Commerce('pk_54947260aa193e44285ef54d4e0e25edd93c0c92c0f99');
            const response = await commerce.products.list();
            const productData = response.data;
            const detailedProducts = productData.map(product => {
                const { id, name, description, price, image } = product;
                return {
                    id,
                    name,
                    description,
                    price,
                    image,
                };
            });

            setProductDetails(detailedProducts);

        }
        catch (error) {
            console.error('Error fetching product details:', error);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        getAllProducts();
    }, [])

    if (isLoading) {
        return (<div className="loading-indicator">
            <div className="w-[100vw] h-[100vh] pt-[35vh] pl-[42vw]">
                <img src={myLoading_2} alt="loading image" style={{ width: '200px' }}></img>
            </div>

        </div>);
    }


    return (<MyContextObj.Provider value={productDetails}>
        {children}
    </MyContextObj.Provider>)


}