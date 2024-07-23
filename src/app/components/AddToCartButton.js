'use client';
import { useState } from 'react';
import useStore from '../store';
import { useRouter } from 'next/navigation';
import styles from '../../styles/addtocart.module.css'

export default function AddToCartButton({ product }) {
  const addToCart = useStore((state) => state.addToCart);
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity); 
    router.push('/cart');
  };

  const handleCountChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(isNaN(value) || value <= 0 ? 1 : value); 
  };

  return (
    <div className={styles.button}>
      <input
        type="number"
        value={quantity}
        onChange={handleCountChange}
        min="1"
        style={{ marginRight: '8px', width: '60px' }} 
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
