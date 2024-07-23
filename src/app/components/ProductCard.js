'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/productCard.module.css'
import Image from 'next/image';

export default function ProductCard({ product }) {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div onClick={handleProductClick} className={styles.card} >
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <p>{product.title}</p>
    </div>
  );
}
