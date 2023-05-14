'use client';


import { useEffect } from 'react';
import { usePathname } from 'next/navigation'

import { allProducts } from '@/app/data/data'
import ProductCard from '../ProductCard';
import styles from '@/app/styles/products.module.css'

interface ProductsProps {
  pathName?: string;
}

const Products = ({pathName}:ProductsProps) => {
  const pathname = usePathname();
  const category = pathname.split('/')[2];
  console.log(category);
  
  const newData = allProducts.filter((product) => {
    if (category === undefined) {
      return product;
    };

    if (product.category.includes(category)) {
      return product;
    }
  });
  
  return (
    <div className={styles.product_list_wrapper}>
      {newData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
};

export default Products;