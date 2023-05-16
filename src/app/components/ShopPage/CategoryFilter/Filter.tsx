import IndoorPlantsFilter from "./IndoorPlantsFilter";
import OutdoorPlantsFilter from "./OutdoorPlantsFilter";

import Link from "next/link";

import styles from "@/app/styles/filter.module.css";

import { allProducts } from "@/app/data/data";


const Filter = () => {
  const filters = ['indoorPlants', 'smallPlants', 'flowers', 'seeds', 'outdoorPlants', 'medium', 'big', 'outseeds']
  const filtered = filters.filter((filter) => filter.length > 0)

 const result = filtered.map((filter) => {
    const arr = allProducts.filter((product) => product.category.includes(filter));    
    return arr
  })  

  return (
    <aside className={styles.filter_container}>
      <div className={styles.filter_options_wrapper}>
        <div className={styles.filter_options}>
          <Link href={"/shop"}>
            <h1>Todas as Categorias</h1>
          </Link>
          <IndoorPlantsFilter quantity={result} />
          <OutdoorPlantsFilter quantity={result} />
        </div>
      </div>
    </aside>
  );
};

export default Filter;
