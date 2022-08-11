import Link from "next/link"
import { useRouter } from "next/router"
import styles from './navbar.module.scss'
import Image from "next/image"

export default function Navbar() {

    const router = useRouter()
    
    const handleHomeImage = () => {
        router.push('/')
    }
  return (
    <nav className={styles.navbar}>
    
       <div className={`${styles.navbar__menu}`}>

       <div className={styles.navbar__menu__logo}>
        <div className={styles.navbar__menu__logo__image} onClick={handleHomeImage}>
            <Image src="/assets/logo.png" alt="" width={300} height={300}/>
        </div>
        <div className={styles.navbar__menu__logo__text}>
            <p>Ajdin Pipo</p>
            <p>Software Developer</p>
        </div>
        
        </div>
    <div className={styles.navbar__menu__links}>
        <Link href='/'>
            <a className={styles.navbar__menu__links__link}>home</a>
        </Link>
        <Link href='/about'>
            <a className={styles.navbar__menu__links__link}>about me</a>
        </Link>
        <Link href='/skills'>
            <a className={styles.navbar__menu__links__link}>skills</a>
        </Link>
        <Link href='/projects'>
            <a className={styles.navbar__menu__links__link}>projects</a>
        </Link>
        <Link href='/contact'>
            <a className={styles.navbar__menu__links__link}>contact</a>
        </Link>
    </div> 
    <div className={styles.navbar__menu__networks}>
            <Link href="#"><a className={styles.navbar__menu__networks__network}>GITHUB</a></Link>
            <Link href="#"><a className={styles.navbar__menu__networks__network}>LINKEDIN</a></Link>
            <Link href="#"><a className={styles.navbar__menu__networks__network}>CODEPEN</a></Link>
        </div>       
       </div>
    </nav>
  )
}
