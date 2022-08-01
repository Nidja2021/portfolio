import { useState } from 'react'
import styles from './softSkill.module.scss'

export default function SoftSkill({name, desc}) {
  const [activeList, setActiveList] = useState(false)
  return (
    <div className={styles.skill}>
        <button className={styles.skill__name} onClick={() => setActiveList(!activeList)}>{name}</button>
        {activeList ? 
          <div className={`${styles.skill__list} ${activeList ? 'active' : ''}`}>
          {desc.map(skill => (
              <p key={skill}>- {skill}</p>
          ))}
          </div>
          :
          ''
        }
        
        
    </div>
  )
}
