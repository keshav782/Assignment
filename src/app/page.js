import Image from "next/image";
import styles from "./page.module.css";
import Product from "./component/Product";

export default function Home() {
  return (
    <>
   <div className={styles.big_container}>
        <div className={styles.border}>
            <div className={styles.commom}>
                  <Image
                  src='/Frame 461.png'
                  alt="bags png"
                  width={90}
                  height={90}
                  className={styles.img}
                  />
                  <div className={styles.words}>All Bags</div>
            </div>
            <div className={styles.commom}>
                  <Image
                  src='/Frame 50.png'
                  alt="pouncgh"
                  width={90}
                  height={90}
                  />
                  <div className={styles.pouch}>Vanity Pouch</div>
            </div>
            <div className={styles.commom}>
                  <Image
                  src='/Frame 49.png'
                  alt="pouncgh"
                  width={90}
                  height={90}
                  />
                  <div className={styles.pouch}>Tote Bag</div>
            </div><div className={styles.commom}>
                  <Image
                  src='/Frame 13.png'
                  alt="pouncgh"
                  width={90}
                  height={90}
                  />
                  <div className={styles.pouch}>Duffle Bag</div>
            </div><div className={styles.commom}>
                  <Image
                  src='/Frame 49-1.png'
                  alt="pouncgh"
                  width={90}
                  height={90}
                  />
                  <div className={styles.pouch}>Laptop Sleeve</div>
            </div><div className={styles.commom}>
                  <Image
                  src='/Frame 49-2.png'
                  alt="pouncgh"
                  width={90}
                  height={90}
                  />
                  <div className={styles.pouch}>Messenger Bags</div>
            </div><div className={styles.commom}>
                  <Image
                  src='/Frame 22.png'
                  alt="pouncgh"
                  width={90}
                  height={90}
                  />
                  <div className={styles.pouch}>Slings Bgs</div>
            </div>
            <div className={styles.commom}>
                  <Image
                  src='/Frame 20.png'
                  alt="pouncgh"
                  width={90}
                  height={90}
                  />
                  <div className={styles.pouch}>Handbags</div>
            </div>
            
            <div className={styles.commom}>
                  <Image
                  src='/Frame 46.png'
                  alt="pouncgh"
                  width={90}
                  height={90}
                  />
                  <div className={styles.pouch}>Bucket Bag</div>
            </div>
        </div>
        <div className={styles.group}>
            <div className={styles.containerstart}>
              <div className={styles.containertext}>Bags</div>
              <Image
              src='/Ellipse 35.png'
              alt="ellipse png"
              width={5}
              height={5}
              />
              <div className={styles.backpacks}>Backpacks</div>
            </div>
            <div className={styles.containerend}>
              <div className={styles.containerendone}>13 products</div>
              <Image
              src='/Vector 4.png'
              alt="vectorpng"
              width={16.67}
              height={20}
              className={styles.contImage}
              />
            </div>
        </div>

        
   </div>
   <Product />
   </>
  );
}
