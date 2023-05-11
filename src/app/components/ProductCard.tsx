'use client';

import { useState } from "react";
import Image from "next/image";

import styles from "../styles/productCard.module.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

interface TypeProduct {
  product: {
    image: string;
    name: string;
    price: number;
    oldPrice?: number;
  };
  key: string;
}

const ProductCard = ({ product, key }: TypeProduct) => {
  const [quantity, setQuantity] = useState(1);

  const changeCartQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  }

  return (
    <div key={key} className={styles.product_card_container}>
      <div className={styles.product_card_image}>
        <Image
          src={product.image}
          alt={product.name}
          width={242}
          height={180}
        />
      </div>
      <div className={styles.product_card_name_price_wrapper}>
        <p className={styles.product_card_name}>{product.name}</p>
        <span className={styles.product_card_price}>R$ {product.price}</span>
        {product.oldPrice && (
          <span className={styles.product_card_old_price}>
            R$ {product.oldPrice}
          </span>
        )}
      </div>
      <div className={styles.product_card_button_wrapper}>
        <button className={styles.product_card_button}>
          <input onChange={changeCartQuantity} className={styles.cart_quantity} type="number" min={1} max={100} value={quantity} />
          <AiOutlineShoppingCart />
          Adicionar ao Carrinho
        </button>
        <button className={styles.product_card_button}>
          <AiOutlineSearch />
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
