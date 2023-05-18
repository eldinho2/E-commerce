"use client";

import Image from "next/image";
import { allProducts } from "@/app/data/data";
import { usePathname } from "next/navigation";

import ProductNotFound from "@/app/components/ProductNotFound";

import styles from "@/app/styles/productDetails.module.css";

export default function Home() {
  const pathname = usePathname();
  const product = pathname.split("/")[2];
  const productFiltered = decodeURIComponent(product);
  const productData = allProducts.find((item) => item.name === productFiltered);

  return (
    <main>
      <section className={styles.details_container}>
        {productData ? (
          <div className={styles.details_wrapper}>
            <div>
              <Image
                src={productData.image}
                alt={productData.name}
                width={330}
                height={260}
                className={styles.details_image}
              />
            </div>
            <div className={styles.details}>
              <h1>{productData.name}</h1>
              <span>R${productData.price}</span>
              {productData.oldPrice && (
                <span className={styles.details_oldPrice}>
                  R${productData.oldPrice}
                </span>
              )}
              <p>{productData.details}</p>
              <div>
                <div>
                  <label htmlFor="">Quantidade</label>
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </div>
                <div>
                  <span>Inclui vaso</span>
                  <select name="" id="">
                    <option value="">Não</option>
                    <option value="">Sim</option>
                  </select>
                </div>
              </div>
              <button>Adicionar ao Carrinho</button>
              <div className={styles.details_delivery}>
              <h2>Entrega</h2>
              <p>
                <span>Frete grátis</span> para São Paulo em compras acima de
                R$200.00
              </p>
              <div>
                <span>Calcular frete</span>
                <input type="text" placeholder="00000-000" />
                <button>OK</button>
                <p>{}</p>
              </div>
            </div>
            </div>
          </div>
        ) : (
          <ProductNotFound />
        )}
      </section>
    </main>
  );
}
