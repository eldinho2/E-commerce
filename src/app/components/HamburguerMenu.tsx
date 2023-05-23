import React from 'react'
import { useState } from 'react';
import styles from '../styles/hamburguerMenu.module.css';

function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? styles.hamburguerIsOpen : styles.hamburguer}`}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      { isOpen && (
        <div className={styles.hamburguerNavOpen}>
          <ul>
            <li>Home</li>
            <li>Plantas</li>
            <li>Vasos</li>
            <li>Shop</li>
          </ul>
        </div>
      ) }
    </div>
  )
}

export default HamburguerMenu;