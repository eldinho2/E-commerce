"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "../styles/productCard.module.css";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

import { useDispatch } from "react-redux";
import { addToCart } from "../GlobalRedux/Features/cart/cartSlice";

import Link from "next/link";

interface TypeProduct {
  product: {
    id: string;
    image: string;
    name: string;
    price: number;
    oldPrice?: number;
  };
}

interface CartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const ProductCard = ({ product }: TypeProduct) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item: CartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: quantity,
    };
    
    dispatch(addToCart(item));

  };

  const changeCartQuantityUP = () => {
    setQuantity(quantity + 1);
  };
  const changeCartQuantityDOWN = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.product_card_container}>
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
        <div className={styles.price_wrapper}>
        <span className={styles.product_card_price}>R$ {product.price}</span>
        {product.oldPrice && (
          <span className={styles.product_card_old_price}>
            R$ {product.oldPrice}
          </span>
        )}
        </div>
      </div>
      <div className={styles.product_card_button_wrapper}>
        <div className={styles.product_card_quantity}>
            <AiOutlinePlus onClick={changeCartQuantityUP} />
          <p>{quantity}</p>
            <AiOutlineMinus onClick={changeCartQuantityDOWN} />
        </div>
        <div className={styles.button_wrapper}>
          <button
            onClick={handleAddToCart}
            className={styles.product_card_button}
          >
            <AiOutlineShoppingCart />
            <p className={styles.mobile_title}>Carrinho</p>
            <h1>Adicionar ao Carrinho</h1>
          </button>
          <Link href={`/details/${product.name}`}>
          <button
          className={styles.product_card_button}>
            <AiOutlineSearch />
            <p className={styles.mobile_title}>Detalhess</p>
            <h1>Ver Detalhes</h1>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
