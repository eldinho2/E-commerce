'use client';

import { useState } from "react";
import Image from "next/image";

import styles from "../styles/productCard.module.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../GlobalRedux/Features/cart/cartSlice";
import { RootState } from "../GlobalRedux/store";


interface TypeProduct {
  product: {
    id: string;
    image: string;
    name: string;
    price: number;
    oldPrice?: number;
  };
  key: string;
}

interface CartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const ProductCard = ({ product, key }: TypeProduct) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  

  const handleAddToCart = () => {

    const item:CartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: quantity
    };

    console.log(cartItems);    
    dispatch(addToCart(item));
  };

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
      <input onChange={changeCartQuantity} className={styles.cart_quantity} type="number" min={1} max={100} value={quantity} />
        <button onClick={handleAddToCart} className={styles.product_card_button}>
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
