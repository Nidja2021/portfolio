import React from 'react'
import Project from '../../components/project/Project'

import styles from './projects.module.scss'

export default function Projects() {

  const projects = [
    {name: 'Bug tracker', src: './my_pic.jpg', alt: 'Bug Tracker', link: 'https://www.google.com/'},
    {name: 'Bug tracker', src: './assets/skills/html.png', alt: 'Bug Tracker', link: 'https://www.google.com/'},
    {name: 'Bug tracker', src: './assets/skills/css.png', alt: 'Bug Tracker', link: 'https://www.google.com/'},
  ]

  return (
    <section className={styles.projects}>

    <h1 className={styles.projects__title}>Projects</h1>

    <div className={styles.projects__project}>
    {
        projects.map(({name, src, alt, link}) => (
          <Project key={name} name={name} src={src} alt={alt} link={link}/>
        ))
      }
    </div>
      
    </section>
  )
}
