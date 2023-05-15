import Image from "next/image";
import styles from "@/app/styles/cartItem.module.css";

import { useDispatch } from "react-redux";
import { deleteItem, increaseQuantity, decreaseQuantity } from "../GlobalRedux/Features/cart/cartSlice";

interface CartItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const CartItem = ({ id, image, name, price, quantity }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem(id));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(id));
  }

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(id));
  }


  return (
    <div>
      <div className={styles.cart_item_container}>
        <div>
          <Image src={image} alt={"fsefs"} width={100} height={100} />
        </div>
        <div className={styles.cart_item_details}>
          <p>{name}</p>
          <p>{price}</p>
          <p>quantidade {quantity}</p>
          <p onClick={handleIncreaseQuantity}>+</p>
          <p onClick={handleDecreaseQuantity}>-</p>
          <p onClick={handleDeleteItem}>X</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
