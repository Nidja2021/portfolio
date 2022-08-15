import { useRef, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'

import styles from '../../styles/contact.module.scss';

export default function Contact() {
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })

  const formRef = useRef()

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });  
  }

  async function onSubmitEmail(e) {
    e.preventDefault()
    let config = {
      method: 'post',
      url: `/api/email`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: inputs,
    };
    try {
      const response = await axios(config);
      console.log(response.data.data);
      if (response.status == 200) {
        alert(response.data.message)
        setInputs({ name:'', email:'', subject:'', message:'' })
      }
      else {
        alert(response.data.data.message)
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <section className={styles.contact}>

      <h1 className={styles.contact__title}>Contact</h1>

      <div className={styles.contact__form}>
          <div className={styles.contact__form__text}>
            <p>You have interesting project for me ?</p>
            <p>I would like to hear more about it, send me message and let's build something incredible :)</p>
          </div>
          
          <form onSubmit={onSubmitEmail} className={styles.contact__form__inputControls}>
            <input 
              type="text" 
              placeholder='Name...' 
              name='name' 
              className={styles.contact__form__controls}
              value={inputs.name}
              onChange={handleChange}
            />
            <input 
              type="text" 
              placeholder='Email...' 
              name='email' 
              className={styles.contact__form__controls}
              value={inputs.email}
              onChange={handleChange}
            />
            <input 
              type="text" 
              placeholder='Subject...' 
              name='subject' 
              className={styles.contact__form__controls}
              value={inputs.subject}
              onChange={handleChange}
            />
            <textarea 
              placeholder='Message...' 
              name='message' 
              className={`${styles.contact__form__controls} ${styles.contact__form__textarea}`}
              value={inputs.message}
              onChange={handleChange}
            ></textarea>
            <button className={`${styles.contact__form__controls} ${styles.contact__form__btn}`}>Send Message</button>
          </form>
          
          <div className={styles.contact__form__networks}>
            <Link href="https://github.com/Nidja2021"><a className={styles.contact__form__networks__links} target='_blank'>GITHUB</a></Link>
            <Link href="https://www.linkedin.com/in/ajdin-pipo-68b922118/"><a className={styles.contact__form__networks__links} target='_blank'>LINKEDIN</a></Link>
            <Link href="https://codepen.io/Ajdin123"><a className={styles.contact__form__networks__links} target='_blank'>CODEPEN</a></Link>
          </div>
        </div>
      
    </section>
  )
}
