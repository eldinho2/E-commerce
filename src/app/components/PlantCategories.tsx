import Image from "next/image";
import styles from "../styles/plantCategories.module.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const plants = [
  {name: "Bonsai",image: "/bonsai.svg"},
  {name: "Cactos",image: "/cactus.svg"},
  {name: "Suculentas",image: "/suculenta.svg"},
  {name: "Trepadeiras",image: "/trepadeira.svg"},
  {name: "Sementes", image: "/sementes.svg"},
  {name: "Plantas Para Presente", image: "/presentes.svg"},
];

const PlantCategories = () => {
  return (
    <section className={styles.section_container}>
      <span className={styles.plant_categories_see_more}>
        Veja mais <AiOutlineArrowRight />
      </span>
      <div className={styles.plant_categories_wrapper}>
        {plants.map((plant) => (
          <div key={plant.name} className={styles.plant_categories_container}>
            <Image width={180} height={180} src={plant.image} alt={plant.name} className={styles.plant_categories_image} />
            <span className={styles.plant_categories_name}>{plant.name}</span>
          </div>
            ))}
      </div>
    </section>
  );
};

export default PlantCategories;
