'use client'
import {  FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const handleCartClick = () => {
    router.push('/cart'); 
  };

  return (
   
      <header>
        <h1>Shoppify</h1>
        <button onClick={handleCartClick}>
          <FaShoppingCart />
        </button>
      </header>
    
  );
};

export default Header;
