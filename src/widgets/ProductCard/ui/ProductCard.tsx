import React from 'react'
import styles from './ProductCard.module.css'
import { product } from 'entitles/redux/interfaces'
import { Link } from 'react-router-dom'

const ProductCard = (props: product) => {
  return (<Link to={'/product/'+ props.id}>
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={props.image} alt="product image" />
      </div>
      <span className={styles.productName}>{props.name}</span>
      <span className={styles.productPrice}>{props.price},00 ₽</span>
    </div>
  </Link>
  )
}

export default ProductCard