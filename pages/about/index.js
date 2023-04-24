import styles from '../../styles/about.module.scss';
import Image from 'next/image';
import { saveAs } from 'file-saver';

export default function About() {

  const saveFile = () => {
    saveAs('/assets/pdfs/ajdin_pipo_cv.pdf', 'ajdin_pipo_cv.pdf');
  }

  return (
    <div className={styles.about}>

      <h1 className={styles.about__title}>about me</h1>

      <div className={styles.about__aboutMe}>
        <div className={styles.about__aboutMe__image}>
          <Image
            src='/assets/mypic/me_avatar.png'
            alt='My Picture'
            layout='fill'
            className={styles.about__aboutMe__image__img}
          />
        </div>
        <div className={styles.about__aboutMe__description}>
          <p>Hello, I am a Full Stack Developer with a passion for creating web applications. My expertise lies mainly in backend development, but I also have experience in frontend development and some knowledge in UX/UI design. Additionally, I hold a Bachelor's degree in Mechanical Engineering and I am currently pursuing a degree in Information Technology.</p>
          <p>As an ambitious and hardworking individual, I enjoy solving problems and am well-organized, with a good sense of humor, although I take my work very seriously.</p>
          <p>In my free time, I'm a big fan of the NBA and love playing basketball. I also enjoy outdoor activities, such as walking, running, and hanging out with my family and friends.</p>
          <p>I like to meet new people and work with someone who is optimistic with good energy.</p>

          <div className={styles.about__aboutMe__description__resume}>
            <p>Want to know more about me?</p>
            <p>You can download my resume.</p>
            <button className={styles.about__aboutMe__description__resume__btn} onClick={saveFile}>download resume</button>
          </div>
        </div>
      </div>



    </div>
  )
}
