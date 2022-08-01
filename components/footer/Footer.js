import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p className={styles.footer__text}>Designed and developed by Ajdin Pipo</p>
        <p className={styles.footer__text}>Copyright - 2022</p>
    </footer>
  )
}
