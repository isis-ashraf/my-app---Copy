import { notFound } from 'next/navigation';
import AddToCartButton from '../../components/AddToCartButton'
import styles from '../../../styles/Details.module.css'

async function fetchProductById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function ProductDetails({ params }) {
  const product = await fetchProductById(params.id);

  return (
    <div className={styles.details}>
      <img src={product.image} alt={product.title} width={300} height={300} />
      <div className={styles.data}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <AddToCartButton product={product} />
      </div>
      
      
    </div>
  );
}
