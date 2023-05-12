import Image from "next/image";

import styles from '../styles/homePage.module.css'

import PlantCategories from "../components/PlantCategories";
import BestSelling from "../components/BestSelling";
import TrendingPlants from "../components/TrendingPlants";
import Blog from "../components/Blog";
import HotSale from "../components/HotSale";
import Planters from "../components/Planters";
import LandScapeGardening from "../components/LandScapeGardening";
import Celebs from "../components/Celebs";
import Footer from "../components/Footer";

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
      <BestSelling />
      <TrendingPlants />
      <Blog />
      <HotSale />
      <Planters />
      <LandScapeGardening />
      <Celebs />
      <Footer />
    </main>
  );
}
