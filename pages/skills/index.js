import Skill from "../../components/skill/Skill"
import styles from './skills.module.scss'
import { useState } from 'react';
import SoftSkill from '../../components/skill/SoftSkill';

export default function Skills() {

  const [techicalSkillsActive, setTechicalSkillsActive] = useState(true)
  const [softSkillsActive, setSoftSkillsActive] = useState(false)



  const handleTechicalSkills = e => {
    console.log('technical active');
    setTechicalSkillsActive(true)
    setSoftSkillsActive(false)
  }

  const handleSoftSkills = e => {
    console.log('soft active');
    setSoftSkillsActive(true)
    setTechicalSkillsActive(false)
  }

  const frontend = ['Javascript', 'ReactJS', 'NextJS', 'Vanilla', 'HTML5', 'CSS3', 'Sass']
  const backend = ['NodeJS', 'Express', 'Python', 'Django', 'Java', 'Typescript']
  const databases = ['Postgresql', 'MongoDB', 'MySQL']
  const softSkills = [
    {name: 'Communication', desc: ['Listen without interrupting', 'Speak withapositive tone', 'Pay attention to your body']},
    {name: 'Negotiation', desc: ['Listen carefully', 'Understand what the other side wants', 'Know your worth', 'Then propose solutions that benefit both sides']},
    {name: 'Empathy', desc: ['Take a genuine interest in other people', 'Look at things from their perspective', 'Acknowledge their feelings', 'Never judge and always be supportive']},
    {name: 'Teamwork', desc: ['Avoid claiming all the credit', 'Celebrate other people\'s wins', 'Praise teammates publicly and praise them generously']},
    {name: 'Emotional intelligence', desc: ['Never act impulsively', 'Take a step back when you\'re upset', 'Understand what you\'re feeling', 'Understand the consequences of your actions']},
    {name: 'Work ethic', desc: ['Never deflect blame on to others', 'Take responsibility for your work', 'Always show up and deliver on time', 'Always keep your commitments']},
    {name: 'Time management', desc: ['Learn to prioritize', 'Learn to delegate', 'Learn to say no']}
  ]

  return (
    <section className={styles.skills}>
      <h1 className={styles.skills__title}>skills</h1>
      <div className={styles.skills__buttons}>
        <button className={styles.skills__buttons__btn} onClick={handleTechicalSkills}>tehnical skills</button>
        <button className={styles.skills__buttons__btn} onClick={handleSoftSkills}>soft skills</button>
      </div>
      <div className={styles.skills__content}>
      
        <div className={`${styles.skills__content__techicalSkills} ${techicalSkillsActive ? '': styles.skills__content__techicalSkills__notActive}`}>
          <div className={styles.skills__content__techicalSkills__skill}>
            <h3>FRONTEND</h3>
            <div className={styles.skills__content__techicalSkills__skill__content}>
              {frontend.map(skill => (
                <Skill key={skill} name={skill}/>
              ))}
            </div>
          </div>
          <div className={styles.skills__content__techicalSkills__skill}>
          <h3>BACKEND</h3>
          <div className={styles.skills__content__techicalSkills__skill__content}>
              {backend.map(skill => (
                <Skill key={skill} name={skill}/>
              ))}
            </div>
          </div>
          <div className={styles.skills__content__techicalSkills__skill}>
          <h3>DATABASES</h3>
          <div className={styles.skills__content__techicalSkills__skill__content}>
              {databases.map(skill => (
                <Skill key={skill} name={skill}/>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`${styles.skills__content__softSkills} ${softSkillsActive ? '' : styles.skills__content__softSkills__notActive }`}>
          {softSkills.map(skill => (
            <SoftSkill key={skill.name} name={skill.name} desc={skill.desc}/>
          ))}
        </div>
        
      </div>
      
    </section>
  )
}
