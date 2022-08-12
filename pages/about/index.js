import styles from '../../styles/about.module.scss';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.about}>

    <h1 className={styles.about__title}>about me</h1>
    
    <div className={styles.about__aboutMe}>
      <div className={styles.about__aboutMe__image}>
        <Image 
          src='/assets/mypic/me_avatar.png'
          alt='My Picture'
          className={styles.about__aboutMe__image__img}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.about__aboutMe__description}>
        <p>Hello, I'm Full Stack Developer from Bosnia and Herzegovina. I have passion for creating web applications, mostly based on backend development, but also have experience with frontend development, and little experience with UX/UI design. Also I'm bachelor of Mechanical Engineering.</p>
        <p>I'm ambitious and hardworking individual, problem solver, well-organized person with a good sense of humour even though I take my work seriously.</p>
        <p>Big fan of NBA, love play a basketball. Also like outdoor activities, such as walking, runing, and hangout with my family and friends.</p>
        <p>I like to meet new people and work with someone who is optimistic with positive energy.</p>

        <div className={styles.about__aboutMe__description__resume}>
          <p>Want to know more about me?</p>
          <p>You can download my resume.</p>
          <button className={styles.about__aboutMe__description__resume__btn}>download resume</button>
        </div>
      </div>
    </div>
    
    
        
    </div>
  )
}
