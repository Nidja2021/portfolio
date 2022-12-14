import Image from 'next/image'
import Link from 'next/link'
import styles from './hero.module.scss'

export default function Hero() {
  return (
    <div className={styles.hero}>
    <div className={styles.hero__image}>
      <Image 
        src="/assets/logo.png"
        alt="Logo"
        layout='fill'
      />
    </div>
      <div className={styles.hero__aboutMe}>
        <p>Hi there</p>
        <p>I am <span className={styles.hero__aboutMe__myName}>Ajdin Pipo</span></p>
        <p>Software Developer</p>
      </div>
      <div className={styles.hero__line}></div>
      <div className={styles.hero__text}>
        <p>You want to text me, I can't wait to meet you</p>
        <Link href='/contact'><a className={styles.hero__text__btn}>Let's chat</a></Link>
      </div>
    </div>
  )
}
