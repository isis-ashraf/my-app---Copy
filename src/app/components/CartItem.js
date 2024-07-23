'use client';
import useStore from '../store';
import Image from 'next/image';
import styles from "../../styles/cartItem.module.css"

export default function CartItem({ item }) {
  const removeFromCart = useStore((state) => state.removeFromCart);
  const decreaseItemQuantity = useStore((state) => state.decreaseItemQuantity);

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleDecrease = () => {
    decreaseItemQuantity(item.id);
  };

  return (
    <div className={styles.item}>
      <Image src={item.image} alt={item.title} width={120} height={120} />
      <div >
      <p>{item.title}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      
    </div>
    <div className={styles.buttons}>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}
