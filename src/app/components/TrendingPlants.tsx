import ProductCard from './ProductCard';

import data from '../data/data';

import styles from '../styles/trendingPlants.module.css';

const PlantCategories = () => {
  return (
    <section className={styles.section_containter}>
      <h1 className={styles.section_title}>Plantas em alta</h1>
      <div className={styles.product_wrapper}>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PlantCategories;