import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from './project.module.scss'

export default function Project({ project }) {

  const router = useRouter()
  const namePath = name.toLowerCase().split(' ').join('-')

  const handleProject = () => {
    router.push(`/projects/${project.id}`)
  }
  return (
    <div className={styles.project} onClick={handleProject}>
        <div className={styles.project__image}>
            <Image 
              src={project.imageUrl} 
              alt={project.name}
              layout='fill'
              objectFit='cover'
              className={styles.project__image__img}
            />
        </div>
        <div className={styles.project__description}>
            <h2>{project.name}</h2>
        </div>
    </div>
  )
}
