import React from 'react'
import styles from './Stamps.module.css'
import HeaderUni from 'widgets/HeaderUni'
import { useAppDispatch } from 'entitles/hooks/useAppDispatch';
import { RootState } from 'entitles/redux/store';
import { useSelector } from 'react-redux';
import { product } from 'entitles/redux/interfaces'
import ProductCard from 'widgets/ProductCard';

const Stamps = () => {
  const dispatch = useAppDispatch();
  const categories = useSelector((state: RootState) => {
    return state.products.categories
  })
  const loading = useSelector((state: RootState) => {
    return state.products.loading
  })
  const error = useSelector((state: RootState) => {
    return state.products.error
  })
  const stampsProducts = categories.find((category) => category?.id === 'stamps')?.products || []


  return (
    <div className={styles.Stamps}>
        <HeaderUni/>
      <div className={styles.container}>
        <div className={styles.banner}>
          <span className={styles.bannerTitle}>Печать и
            штампы</span>

          <span className={styles.bannerBio}>Изготовление разных видов печатей,
            штампов и факсимиле.</span>
        </div>
        <div className={styles.products}>
          <div className={styles.productsStamps}>
            {
              loading ? <>loading FLAG</> :
                <>{
                  stampsProducts.map((product: product) => {
                    return <ProductCard
                      image={product.image || ''}
                      images={product.images}
                      id={product.id || 'NoneID'}
                      name={product.name || ''}
                      price={product.price || 0}
                      subtitle={product.subtitle || ''} />

                  })
                }</>

            }
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Stamps