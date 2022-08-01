import Link from "next/link"
import { useEffect, useState } from "react"
import styles from './navbar.module.scss'

import Footer from '../footer/Footer'
import Image from "next/image"

export default function Navbar() {

    const [activeMenu, setActiveMenu] = useState(false)
    const min_width = 960;
    
    const handleActiveMenu = e => {
        setActiveMenu(!activeMenu)
    }
  return (
    <nav className={styles.navbar}>
    
    {
        activeMenu ? 
        <button className={`${styles.buttons} ${activeMenu ? '' : 'active'}`} onClick={handleActiveMenu}>exit</button>
        :
        <button className={`${styles.buttons} ${activeMenu ? '' : 'active'}`} onClick={handleActiveMenu}>menu</button>
    }
    {
        activeMenu ? 
    
       <div className={`${styles.navbar__menu} ${activeMenu ? 'active' : ''}`}>

       <div className={styles.navbar__menu__logo}>
       <div className={styles.navbar__menu__logo__image}>
        <Image src="./assets/logo.png" alt="" />
       </div>
       <div className={styles.navbar__menu__logo__text}>
        <p>Ajdin Pipo</p>
        <p>Software Developer</p>
       </div>
        
    </div>
    <div className={styles.navbar__menu__links}>
        <Link href='/'>
            <a className={styles.navbar__menu__links__link} onClick={handleActiveMenu}>home</a>
        </Link>
        <Link href='/about'>
            <a className={styles.navbar__menu__links__link} onClick={handleActiveMenu}>about me</a>
        </Link>
        <Link href='/skills'>
            <a className={styles.navbar__menu__links__link} onClick={handleActiveMenu}>skills</a>
        </Link>
        <Link href='/projects'>
            <a className={styles.navbar__menu__links__link} onClick={handleActiveMenu}>projects</a>
        </Link>
        <Link href='/contact'>
            <a className={styles.navbar__menu__links__link} onClick={handleActiveMenu}>contact</a>
        </Link>
    </div>
        
        <div className={styles.navbar__menu__networks}>
            <Link href="#">GITHUB</Link>
            <Link href="#">LINKEDIN</Link>
            <Link href="#">CODEPEN</Link>
        </div>
        <Footer />
       </div>
     : ''
    }
    </nav>
    
  )
}
