import { useContext, useEffect, useState } from "react"
import Layout from "../Layout/Layout"
import Commerce from "@chec/commerce.js"
import ProductsList from "../components/ProductsList"
import { MyContextObj } from "../MyContext/MyContextAPI"
import ProductCard from "../components/ProductCard"

const Home = () => {

    const productDetails = useContext(MyContextObj);

    //console.log(productDetails);

    return (
        <>
            <Layout title={"Home"}>
                <section className="md:min-h-[300px]">

                    <div className="text-center text-3xl text-purple-500">Home Page</div>
                    <div className="text-center underline text-orange-500">All Products</div>
                    <div>
                        <div className="flex flex-row flex-wrap gap-3">
                            {
                                productDetails.map(product => (
                                    <ProductCard key={product.id} productInfo={product} />
                                ))
                            }
                        </div>
                    </div>

                </section>
            </Layout>
        </>

    )

}

export default Home