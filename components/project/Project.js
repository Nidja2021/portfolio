import Link from 'next/link'
import styles from './project.module.scss'

export default function Project({name, src, alt, link}) {
  return (
    <div className={styles.project}>
        <div className={styles.project__image}>
            <img src={src} alt={alt} className={styles.project__image__img}/>
        </div>
        <div className={styles.project__description}>
            <h2>{name}</h2>
            <Link href={link}>
              <a className={styles.project__description__projectLink}>See Project</a>
            </Link>
        </div>
    </div>
  )
}
