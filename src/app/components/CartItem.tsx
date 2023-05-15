
import Image from 'next/image';
import styles from '@/app/styles/cartItem.module.css'

interface CartItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  deleteItem: () => void;
}

const CartItem = ({ id, image, name, price, quantity, deleteItem }:CartItemProps) => {
    return (
        <div>
          <div className={styles.cart_item_container}>
            <div> 
              <Image src={image} alt={'fsefs'} width={100} height={100} />
            </div>
            <div className={styles.cart_item_details}>
            <p>{name}</p>
            <p>{price}</p>
            <p>quantidade {quantity}</p>
            <p>+</p>
            <p>-</p>
            <p onClick={deleteItem}>X</p>
            </div>
          </div>
        </div>
    )
};

export default CartItem;