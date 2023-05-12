import Image from "next/image";
import styles from "../styles/bestSelling.module.css";
import Link from 'next/link';


const BestSelling = () => {
  return (
    <section className={styles.section_container}>
      <h2 className={styles.best_selling_tittle}>Mais Vendidas</h2>
      <div className={styles.best_selling_wrapper}>
        <Link href={`/shop`}>
        <div className={styles.best_selling_container}>
          <div className={styles.best_selling_container_image}>
            <Image
              src={"/indoorplants.svg"}
              alt="indoor plants"
              width={344}
              height={318}
              className={styles.best_selling_image}
            />
          </div>
          <button className={styles.best_selling_button}>Comprar Agora</button>
        </div>
        </Link>
        <Link href={`/shop`}>
        <div className={styles.best_selling_container}>
          <div className={styles.best_selling_container_image}>
            <Image
              src={"/purificadorasdear.svg"}
              alt="indoor plants"
              width={344}
              height={318}
              className={styles.best_selling_image}
            />
          </div>
          <button className={styles.best_selling_button}>Comprar Agora</button>
        </div>
        </Link>
        <Link href={`/shop`}>
        <div className={styles.best_selling_container}>
          <div className={styles.best_selling_container_image}>
            <Image
              src={"/plantasfloríferas.svg"}
              alt="indoor plants"
              width={344}
              height={318}
              className={styles.best_selling_image}
            />
          </div>
          <button className={styles.best_selling_button}>Comprar Agora</button>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default BestSelling;
