import Image from "next/image";

import styles from '../styles/homePage.module.css'

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
