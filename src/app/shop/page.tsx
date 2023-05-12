import Image from "next/image"

import styles from "../styles/shopPage.module.css"

import Filter from "@/app/components/ShopPage/CategoryFilter/Filter"
import Products from '@/app/components/ShopPage/Products'

export default function Home() {
  return (
    <main>
      <section>
        <div className={styles.image_wrapper}>
          <Image
            src="/Hero Bannershop.svg"
            alt="logo"
            width={2000}
            height={320}
            priority={true}
            quality={100}
            className={styles.image}
          />
        </div>
      </section>
      <section className={styles.products_wrapper}>
      <Filter />
      <Products  />
      </section>
    </main>
  )
}
