import {useState} from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

import styles from './layout.module.scss'

function Layout({children}) {


  return (
    <div className={styles.layout}>
        <Navbar />
        <main className={styles.layout__main}>
            {children}
        </main>
    </div>
  )
}
export default Layout;