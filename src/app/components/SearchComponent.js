'use client';
import {  FaSearch } from 'react-icons/fa';
import styles from '../../styles/search.module.css'

export default function SearchComponent({ searchQuery, onSearchChange }) {
  
  return (
    <div className={styles.SearchContainer}>
    <input
      type="text"
      value={searchQuery}
      onChange={onSearchChange}
      placeholder="Search for products"
    />
    <FaSearch />
    </div>
  );
}
