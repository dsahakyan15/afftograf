import { useEffect, useReducer, useRef } from 'react'
import styles from './Printing.module.css'
import HeaderUni from 'widgets/HeaderUni'
import { useAppDispatch } from 'entitles/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { RootState } from 'entitles/redux/store'
import { fetchCategories } from 'entitles/redux/productsSlice'



const Printing = (props: any) => {

  const dispatch = useAppDispatch();
  const categories = useSelector((state: RootState) => {
    return state.products
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

console.log(categories);

  return (
    <div className={styles.Printing}>
      <HeaderUni />
      <div className={styles.container}>
        <div className={styles.banner}>
          <span className={styles.bannerTitle}>Полиграфия</span>

          <span className={styles.bannerBio}>Ксерокс и производство печатной продукций:
            визитки, буклеты, листовки и так дале.</span>
        </div>
        <button>bulba</button>
      </div>
    </div>
  )
}

export default Printing

function fetchBoards(): any {
  throw new Error('Function not implemented.')
}
