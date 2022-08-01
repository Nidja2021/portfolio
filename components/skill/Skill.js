import styles from './skill.module.scss'

export default function Skill({name}) {
  return (
    <div className={styles.skill}>
        <p>{name}</p>
    </div>
  )
}
