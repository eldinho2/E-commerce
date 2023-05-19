import Image from "next/image";
import styles from "@/app/styles/cartItem.module.css";

import { useDispatch } from "react-redux";
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} from "../GlobalRedux/Features/cart/cartSlice";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";

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
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div>
      <div className={styles.cart_item_container}>
        <div>
          <Image src={image} alt={"fsefs"} width={100} height={100} />
        </div>
        <div className={styles.cart_item_details}>
          <div className={styles.cart_item_header}>
            <p>{name}</p>
            <p onClick={handleDeleteItem}>
              <AiFillDelete />
            </p>
          </div>
          <p className={styles.cart_item_price}>{price}</p>
          <div className={styles.cart_item_quantity}>
            <p onClick={handleIncreaseQuantity}>
              <AiOutlinePlus />
            </p>
            <span>{quantity}</span>
            <p onClick={handleDecreaseQuantity}>
              <AiOutlineMinus />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
