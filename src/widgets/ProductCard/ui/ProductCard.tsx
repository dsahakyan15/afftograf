import React from 'react'
import styles from './ProductCard.module.css'
import { product } from 'entitles/redux/interfaces'

const ProductCard = (props:product) => {
  return (
      <div className={styles.productCard}>
        Product Card
      </div>
  )
}

export default ProductCard