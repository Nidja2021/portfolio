import {useState} from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

import styles from './layout.module.scss'

export default function Layout({children}) {

  // const [activeMenu, setActiveMenu] = useState(false)
  //   const handleActiveMenu = e => {
  //       setActiveMenu(!activeMenu)
  //   }
  return (
    <div className={styles.layout}>
    {/* {
        activeMenu ? 
        <button className={`${styles.buttons} ${activeMenu ? '' : 'active'}`} onClick={handleActiveMenu}>exit</button>
        :
        <button className={`${styles.buttons} ${activeMenu ? '' : 'active'}`} onClick={handleActiveMenu}>menu</button>
    } */}
        <Navbar />
        <main className={styles.layout__main}>
            {children}
        </main>
    </div>
  )
}
