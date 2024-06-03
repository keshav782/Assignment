import React from "react";
import styles from '../style/header.module.css'
import Image from "next/image";
function Header(){
    return(
            <header className={styles.main_header}>
                <div className={styles.header}> 
                 <div className={styles.container}>
                    <div className={styles.name}>
                        TANN TRIM
                    </div>
                    <div className={styles.imagecontainer}>
                            <Image
                            src='/search.png'
                            alt='search'
                            width={14}
                            height={14}
                            className={styles.search}
                            />
                             <Image
                            src='/user-alt.png'
                            alt='search'
                            width={14}
                            height={14}
                            className={styles.user}
                            />
                             <Image
                            src='/Bookmark.png'
                            alt='search'
                            width={14}
                            height={14}
                            className={styles.bookmark}
                            />
                             <Image
                            src='/shopping-bag.png'
                            alt='search'
                            width={14}
                            height={14}
                            className={styles.shopping}
                            />
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.bags}>Bags</div>
                    <div className={styles.travel}>Travel</div>
                    <div className={styles.Accesories}>Accesories</div>
                    <div className={styles.Gifting}>Gifting</div>
                    <div className={styles.Jewelery}>Jewelery</div>
                </div>
                
                </div>   
            </header>
            
    )
}
export default Header;