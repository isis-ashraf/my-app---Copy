'use client'
import { useState, useEffect } from 'react';
import ProductCard from '../app/components/ProductCard';
import SearchComponent from '../app/components/SearchComponent';
import '../styles/globals.css'

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default function SearchPage() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchAndSetProducts() {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
    }
    fetchAndSetProducts();
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const url = new URL(window.location.href);
    url.searchParams.set('search', query);
    window.history.pushState({}, '', url);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchComponent searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div className='products'>
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
