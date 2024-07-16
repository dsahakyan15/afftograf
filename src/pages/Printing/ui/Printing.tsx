import { useReducer } from 'react'
import styles from './Printing.module.css'
import HeaderUni from 'widgets/HeaderUni'


function reducer(state:any, action:any) {
  if (action.type === 'add') {
    return [
      ...state,
      {
        name: action.payload.name,
        id: Math.random()
      }
    ]
  }
}

const Printing = (props: any) => {

  const [shadow, dispatch] = useReducer(reducer, [
    {
      name: 'davit',
      id: Math.random()
    }
  ])

  console.log(shadow);

  return (
    <div className={styles.Printing}>
      <HeaderUni />
      <div className={styles.container}>
        <div className={styles.banner}>
          <span className={styles.bannerTitle}>Полиграфия</span>

          <span className={styles.bannerBio}>Ксерокс и производство печатной продукций:
            визитки, буклеты, листовки и так дале.</span>
        </div>
        <button onClick={() => dispatch({
          type: 'add',
          payload: {
            name: 'Vardan'
          }
        })}>bulba</button>
      </div>
    </div>
  )
}

export default Printing