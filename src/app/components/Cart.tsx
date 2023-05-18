"use client";

import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "@/app/styles/cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from 'react-redux';
import { RootState } from '../GlobalRedux/store';


const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);


  const handleOpenCart = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseCart = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setIsAnimationDone(true);
    }, 500);
  };

  const totalCart = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <AiOutlineShoppingCart onClick={handleOpenCart} />
      {isOpen && (
        <div
          className={`${styles.cart_container} ${isClosing && styles.closing}`}
          onAnimationEnd={() => setIsAnimationDone(false)}
        >
            <div className={styles.cart_header}>
              <AiOutlineShoppingCart onClick={handleCloseCart} />
              Seu Carrinho
            </div>
          <div className={styles.cart_content}>
            <div className={styles.cartItem_wrapper}>
              {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
              ))}
            </div>
          </div>
          <div className={styles.cart_footer}>
            <span>Total: {totalCart.toFixed(2)}</span>
            <button className={styles.card_button}>Finalizar Compra</button>
          </div>
        </div>
      )}
      {!isOpen && isAnimationDone && null}
    </div>
  );
};

export default Cart;
