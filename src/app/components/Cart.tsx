"use client";

import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "@/app/styles/cart.module.css";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

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

  return (
    <div>
      <AiOutlineShoppingCart onClick={handleOpenCart} />
      {isOpen && (
        <div
          className={`${styles.cart_container} ${isClosing && styles.closing}`}
          onAnimationEnd={() => setIsAnimationDone(false)}
        >
          <div className={styles.cart_header}>
            <h1>Seu Carrinho</h1>
            <AiOutlineShoppingCart onClick={handleCloseCart} />
          </div>
        </div>
      )}
      {!isOpen && isAnimationDone && null}
    </div>
  );
};

export default Cart;
