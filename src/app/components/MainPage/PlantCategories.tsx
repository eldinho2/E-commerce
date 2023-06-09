import Image from "next/image";
import styles from "@/app/styles/plantCategories.module.css";
import Link from 'next/link';

import { AiOutlineArrowRight } from "react-icons/ai";

const plants = [
  {name: "Bonsai",image: "/mainpage/bonsai.svg"},
  {name: "Cactos",image: "/mainpage/cactus.svg"},
  {name: "Suculentas",image: "/mainpage/suculenta.svg"},
  {name: "Trepadeiras",image: "/mainpage/trepadeira.svg"},
  {name: "Sementes", image: "/mainpage/sementes.svg"},
  {name: "Plantas Para Presente", image: "/mainpage/presentes.svg"},
];

const PlantCategories = () => {
  return (
    <section className={styles.section_container}>
      <Link href={`/shop`}>
      <span className={styles.plant_categories_see_more}>
        Veja mais <AiOutlineArrowRight />
      </span>
      </Link>
      <div className={styles.plant_categories_wrapper}>
        {plants.map((plant) => (
          <div key={plant.name} className={styles.plant_categories_container}>
            <Link href={`/shop`}>
            <Image width={180} height={180} src={plant.image} alt={plant.name} className={styles.plant_categories_image} />
            <span className={styles.plant_categories_name}>{plant.name}</span>
            </Link>
          </div>
            ))}
      </div>
    </section>
  );
};

export default PlantCategories;
