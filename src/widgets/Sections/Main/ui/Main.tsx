import styles from './Main.module.css'

import { Link } from 'react-router-dom'

const Main = () => {
  return (
      <div className={styles.Main}>
          <div className={styles.mainInner}>
              <img src="https://firebasestorage.googleapis.com/v0/b/afftograf-e496c.appspot.com/o/images%2FAfftografBig.svg?alt=media&token=aa9ecafc-0415-4ae1-a538-a948788b125e" alt="Logo BIG" />
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
                          <img className={styles.wood} src="https://firebasestorage.googleapis.com/v0/b/afftograf-e496c.appspot.com/o/images%2FWoodArt.svg?alt=media&token=6fafb519-ade0-4c8e-a1b8-876b14caedd8" alt="Wood Art" />
                      </span>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default Main