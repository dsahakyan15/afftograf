import React from 'react'
import styles from './ProductCard.module.css'
import { product } from 'entitles/redux/interfaces'

const ProductCard = (props: product) => {
  return (<>
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={props.image} alt="" />
      </div>
      <span className={styles.productName}>{props.name}</span>
      <span className={styles.productPrice}>{props.price},00 ₽</span>
    </div>
  </>
  )
}

export default ProductCard