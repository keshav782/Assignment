import React from "react";
import styles from '../style/cart.module.css';
import Image from "next/image";
function Cart({product})
{
    console.log("----",product);
    return(
        <>
            
                <div className={styles.container}>
                        <div>
                            <Image
                            src={product.image}
                            alt='image'
                            width={338.35}
                            height={373.26}
                            className={styles.img}
                            />
                            <Image
                            src='/Bookmark.png'
                            alt='bookmark'
                            width={26}
                            className={styles.bookmark}
                            height={34}
                            />
                            <div className={styles.title}>{product.title.split(' ').slice(0,4).join(' ')}</div>
                        </div>
                        <div className={styles.lastconatiner}>
                                <div className={styles.price}>
                                    <span className={styles.dollar}>$</span>
                                    {product.price}
                                    <del className={styles.lastprice}>499</del>
                                    <span className={styles.offer}>(50% Off)</span>
                                </div>
                                <div className={styles.addbags}>
                                        <Image
                                        src='/shopping-bag.png'
                                        width={26.08}
                                        height={40.49}
                                        className={styles.shopping}
                                        alt="bags"
                                        />
                                        <Image
                                        src='/plus.png'
                                        alt="plus"
                                        width={19}
                                        className={styles.plus}
                                        height={20}
                                        />
                                </div>
                        </div>
                </div>
            
        </>
    )
}
export default Cart