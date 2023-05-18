'use client';

import Image from "next/image";
import { allProducts } from "@/app/data/data";
import { usePathname } from 'next/navigation'

import ProductNotFound from "@/app/components/ProductNotFound";

export default function Home() {
  const pathname = usePathname()
  const product = pathname.split('/')[2]
  const productFiltered = decodeURIComponent(product)
  const productData = allProducts.find((item) => item.name === productFiltered);

  return (
    <main>
    <section>
      {productData ? (
        <div>
          <div>
            <Image
              src={productData.image}
              alt={productData.name}
              width={400}
              height={400}
            />
          </div>
          <div>
            <h1>{productData.name}</h1>
            <p>{productData.details}</p>
            <p>{productData.price}</p>
          </div>
        </div>
      ) : (
        <ProductNotFound />
      )}
    </section>
  </main>
  )
}
