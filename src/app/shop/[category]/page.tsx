'use client';

import { usePathname } from 'next/navigation'
import Image from 'next/image';

import Filter from "@/app/components/ShopPage/CategoryFilter/Filter"
import Products from '@/app/components/ShopPage/Products'

import styles from "@/app/styles/shopPage.module.css"


export default function Home() {

  const pathname = usePathname();
  const category = pathname.split('/')[2];
  return (
    <main>
    <section>
      <div className={styles.image_wrapper}>
        <Image
          src="/mainpage/Hero Bannershop.svg"
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
    <Products pathName={category} />
    </section>
  </main>
  )
}
