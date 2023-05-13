import Image from "next/image";

import styles from '../styles/homePage.module.css'

import PlantCategories from "../components/MainPage/PlantCategories";
import BestSelling from "../components/MainPage/BestSelling";
import TrendingPlants from "../components/MainPage/TrendingPlants";
import HotSale from "../components/MainPage/HotSale";
import Planters from "../components/MainPage/Planters";
import LandScapeGardening from "../components/MainPage/LandScapeGardening";
import Celebs from "../components/MainPage/Celebs";

export default function Home() {
  return (
    <main>
      <section>
        <div className={styles.image_wrapper}>
          <Image
            src="/mainpage/Rectangle 50Banner.svg"
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
      <BestSelling />
      <TrendingPlants />
      <HotSale />
      <Planters />
      <LandScapeGardening />
      <Celebs />
    </main>
  );
}
