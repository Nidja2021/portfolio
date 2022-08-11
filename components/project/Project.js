import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from './project.module.scss'

export default function Project({name, src, alt, link}) {

  const router = useRouter()

  const handleProject = () => {
    router.push(`/projects/${name}`)
  }
  return (
    <div className={styles.project} onClick={handleProject}>
        <div className={styles.project__image}>
            <Image 
              src={src} 
              alt={alt}
              layout='fill'
              objectFit='cover'
              className={styles.project__image__img}
            />
        </div>
        <div className={styles.project__description}>
            <h2>{name}</h2>
            {/* <Link href={link}>
              <a className={styles.project__description__projectLink}>See Project</a>
            </Link> */}
        </div>
    </div>
  )
}
