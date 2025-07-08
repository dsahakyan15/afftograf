import styles from './ProductCard.module.css'
import type { product } from 'entities/redux/interfaces'
import { Link } from 'react-router-dom'

/// 6.66 -> 6,66 ₽
const productPriceChecker = (price: number | string) => {
  const numericPrice = typeof price === 'number' ? price : parseFloat(price);
  if (!isNaN(numericPrice) && numericPrice > 0) {
    return numericPrice?.toFixed(2).replace('.', ',') + ' ₽';
  } else {
    return 'Цена не указана';
  }
}


const ProductCard = (props: product) => {
  return (<Link to={'/product/' + props.id}>
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={props.image} alt="product image" />
      </div>
      <span className={styles.productName}>{props.name}</span>
      <span className={styles.productPrice}>{  productPriceChecker(props.price)}</span>
    </div>
  </Link>
  )
}

export default ProductCard