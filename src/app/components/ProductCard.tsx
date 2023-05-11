import Image from 'next/image';

import styles from '../styles/productCard.module.css';

interface TypeProduct {
    product: {
        image: string;
        name: string;
        price: number;
    },
    key: string;
}

const ProductCard = ({ product, key }:TypeProduct ) => {
    return (
        <div key={key} className={styles.product_card_container}>
            <div className={styles.product_card_image}>
                <Image src={product.image} alt={product.name} width={242} height={180} />
            </div>
            <div className={styles.product_card_name_price_wrapper}>
            <p className={styles.product_card_name}>{product.name}</p>
            <span className={styles.product_card_price}>R$ {product.price}</span>
            </div>
            <div>
                <button className={styles.product_card_button}>Comprar</button>
            </div>
        </div>
    )
};

export default ProductCard;