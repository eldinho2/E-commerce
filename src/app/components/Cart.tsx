'use client'; 

import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from '@/app/styles/cart.module.css'


const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <AiOutlineShoppingCart onClick={handleOpenCart} />
      {isOpen && (
        <div className={styles.cart_container}>
          <div className={styles.cart_header}>
            <h1>Seu Carrinho</h1>
            <AiOutlineShoppingCart onClick={handleOpenCart} />
          </div>
        </div>
      )}
    </div>
  )
};

export default Cart;