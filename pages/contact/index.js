import styles from '../../styles/contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.contact}>

      <h1 className={styles.contact__title}>Contact</h1>

      <form className={styles.contact__form}>
          <div className={styles.contact__form__text}>
            <p>You have interesting project for me ?</p>
            <p>I would like to hear more about it, send me message and let's build something incredible :)</p>
          </div>
          <div className={styles.contact__form__inputControls}>
            <input className={styles.contact__form__controls} type="text" placeholder='Name...' />
            <input className={styles.contact__form__controls} type="text" placeholder='Email...'/>
            <input className={styles.contact__form__controls} type="text" placeholder='Subject...'/>
            <textarea className={`${styles.contact__form__controls} ${styles.contact__form__textarea}`} placeholder='Message...'></textarea>
            <button className={`${styles.contact__form__controls} ${styles.contact__form__btn}`}>Send Message</button>
          </div>
          
          <div className={styles.contact__form__networks}>
            <a href="#" className={styles.contact__form__networks__links}>github</a>
            <a href="#" className={styles.contact__form__networks__links}>linkedin</a>
            <a href="#" className={styles.contact__form__networks__links}>codepen</a>
          </div>
        </form>
      
    </section>
  )
}
