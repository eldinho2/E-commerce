import ProductCard from '../ProductCard';

import { dataHotSalePlants } from '../../data/data';


import styles from "@/app/styles/hotSale.module.css"

const HotSale = () => {
  return (
    <section className={styles.section_containter}>
      <h1 className={styles.section_title}>Promoções Imperdíveis</h1>
      <div className={styles.product_wrapper}>
        {dataHotSalePlants.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
};

export default HotSale;