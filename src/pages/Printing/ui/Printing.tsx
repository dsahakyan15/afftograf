import { useEffect, useReducer, useRef } from 'react'
import styles from './Printing.module.css'
import HeaderUni from 'widgets/HeaderUni'
import ProductCard from 'widgets/ProductCard'
import { useAppDispatch } from 'entitles/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { RootState } from 'entitles/redux/store'
import { fetchCategories } from 'entitles/redux/productsSlice'
import { product } from 'entitles/redux/interfaces'



const Printing = (props: any) => {

  const dispatch = useAppDispatch();
  const categories = useSelector((state: RootState) => {
    return state.products.categories
  })
  const categoriesRef = useRef<HTMLDivElement>(null)
  const loading = useSelector((state: RootState) => {
    return state.products.loading
  })
  const error = useSelector((state: RootState) => {
    return state.products.error
  })
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])


  return (
    <div className={styles.Printing}>
      <HeaderUni />
      <div className={styles.container}>
        <div className={styles.banner}>
          <span className={styles.bannerTitle}>Полиграфия</span>

          <span className={styles.bannerBio}>Ксерокс и производство печатной продукций:
            визитки, буклеты, листовки и так далеe.</span>
        </div>
        <div className={styles.products}>
          {
            loading ? <>loading FLAG</> : 
              <>{
                categories.map(category => {
                  console.log((category), '000')
                  return <ProductCard image={''} images={null} id={category.id} name={''} price={0} subtitle={null} />

                })
              }</>

          }


        </div>
      </div>
    </div>
  )
}

export default Printing

