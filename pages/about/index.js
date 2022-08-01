import styles from './about.module.scss'

import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <section className={styles.about}>

    <h1 className={styles.about__title}>about me</h1>
    
    <div className={styles.about__aboutMe}>
      <div className={styles.about__aboutMe__image}>
        <img 
          src='assets/mypic/me_avatar.png'
          alt='My Picture'
          className={styles.about__aboutMe__image__img}
        />
      </div>
      <div className={styles.about__aboutMe__description}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum modi in, incidunt unde id reprehenderit animi praesentium suscipit minima obcaecati quis beatae, similique nemo totam. Obcaecati autem ut consequatur.</p>
      </div>
    </div>

    <button className={styles.about__btn}>download resume</button>
        
    </section>
  )
}
