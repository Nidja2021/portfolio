import Image from 'next/image'
import Link from 'next/link'
import styles from './projectDetails.module.scss'

export default function ProjectDetails({project}) {
  const technologies = project.stack
  return (
    <div className={styles.projectDetails}>
      <div className={styles.projectDetails__image}>
        <Image 
          src={project.imageUrl}
          alt={project.name}
          layout='fill'
        />
      </div>
      <h1 className={styles.projectDetails__projectName}>{project.name}</h1>
      <div className={styles.projectDetails__stack}>
        {
          technologies.map(stack => (
            <p key={stack.id} className={styles.projectDetails__stack__item}>{stack}</p>
          ))
        }
      </div>
      <p className={styles.projectDetails__description}>{project.description}</p>
      <div className={styles.projectDetails__links}>
        <Link href={`${project.githubLink}`}>
          <a className={styles.projectDetails__links__link} target="_blank">github</a>
        </Link>
        <Link href={`${project.demoLink}`}>
          <a className={styles.projectDetails__links__link} target="_blank">demo link</a>
        </Link>
      </div>
      
    </div>
  )
}
