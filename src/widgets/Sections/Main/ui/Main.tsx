import styles from './Main.module.css'

import { Link } from 'react-router-dom'

const Main = (props:any) => {
  return (
      <div id={props.id} className={styles.Main}>
          <div className={styles.mainInner}>
              <img src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/AfftografBig.svg?alt=media&token=48a52a85-1071-4e1d-97fc-f24982b8d858" alt="Logo BIG" />
              <div className={styles.line}></div>
              <div className={styles.mainLinks}>

                  <Link to="/photo">
                      <span className={styles.mainLink}>
                          Фото
                      </span>
                  </Link>
                  /
                  <Link to="/printing">
                      <span className={styles.mainLink}>
                          Полиграфия
                      </span>
                  </Link>
                  /
                  <Link to="/stamps">
                      <span className={styles.mainLink}>
                          Печати и штампы
                      </span>
                  </Link>
                  /
                  <Link to="/woodArt">
                      <span className={styles.mainLink}>
                          <img className={styles.wood} src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/WoodArt.svg?alt=media&token=68fde309-08d2-4e5d-8096-cf7f71a55304" alt="Wood Art" />
                      </span>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default Main