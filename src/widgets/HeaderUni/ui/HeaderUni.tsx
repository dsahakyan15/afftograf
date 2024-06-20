import { useState } from 'react';

import { FaSistrix } from "react-icons/fa6";
import styles from './HeaderUni.module.css'

import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';

type Props = {}

const HeaderUni = (props: Props) => {
  let [searchOn, setSearchOn] = useState<Boolean>(false)


  return (
    <div className={styles.header}>
      
      <Logo/>
      {
        searchOn ?
          <Search setSearchOn={setSearchOn}/>
          :
          <Menu/>
      }
      <div className={styles.personal}>
        
        <div onClick={() => setSearchOn(true)} className={styles.searchBtn}><FaSistrix /></div>
        <span className={styles.user}>Личные данные</span>
      </div>

    </div>
  )
}

export default HeaderUni