"use client";
import React, { useEffect, useState } from "react";
import styles from '../style/product.module.css';
import axios from 'axios';
import Cart from "./Cart";

function Product()
{
    const URL = "https://fakestoreapi.com/products";

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProduct = async ()=>{
            try{
                const response = await axios.get('https://fakestoreapi.com/products');
                // console.log("----",response.data);
                setProducts(response.data);
            }
            catch(err)
            {
                console.error('Error fetching products:', err);
            }
        }
        fetchProduct();
    },[])
    return(
        
        <div className={styles.container}>
                 <div className={styles.product}>
                        {
                            products.map((singleproduct)=>(
                                <Cart key={singleproduct.id} product={singleproduct}/>
                            ))
                        }
                </div>
        </div>
    )
}
export default Product;