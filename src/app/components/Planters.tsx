import ProductCard from './ProductCard';

import { dataPlanters } from '../data/data';


import styles from "../styles/hotSale.module.css"

const Planters = () => {
  return (
    <section className={styles.section_containter}>
      <h1 className={styles.section_title}>Vasos</h1>
      <div className={styles.product_wrapper}>
        {dataPlanters.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
};

export default Planters;