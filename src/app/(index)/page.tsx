import Image from "next/image";

import styles from '../styles/homePage.module.css'

import PlantCategories from "../components/PlantCategories";

export default function Home() {
  return (
    <main>
      <section>
        <div className={styles.image_wrapper}>
          <Image
            src="/Rectangle 50Banner.svg"
            alt="logo"
            width={2000}
            height={320}
            priority={true}
            quality={100}
            className={styles.image}
          />
        </div>
      </section>
      <PlantCategories />
    </main>
  );
}
