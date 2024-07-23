'use client'
import { useRouter } from 'next/navigation';
import useStore from '../store';
import CartItem from '../components/CartItem';
import styles from '../../styles/cart.module.css'

export default function CartPage() {
  const router=useRouter(); 
  
  const { cart, clearCart } = useStore(state => ({
    cart: state.cart,
    clearCart: state.clearCart,
  }));


  const handleClearCart = () => {
    clearCart();
  };

  const handlePurchase = () => {
    alert('Purchase successful!');
    clearCart();
  };

  return (
    <div className={styles.cartPage}>
      <h1>Your Cart</h1>
      <div className={styles.actions}>
      <button onClick={handleClearCart}>Clear Cart</button>
      <button onClick={handlePurchase}>Purchase</button>
      </div>
      <div className={styles.cartItems}>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(item => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <button className={styles.home} onClick={() => router.push('/')} >Continue Shopping</button>
    </div>
  );
}
