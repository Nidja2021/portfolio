import Project from '../../components/project/Project'
import styles from '../../styles/projects.module.scss';
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  doc,
} from "firebase/firestore";

export default function Projects({projects}) {

  return (
    <div className={styles.projects}>
      <h1 className={styles.projects__title}>Projects</h1>

      <div className={styles.projects__project_list}>
      {
          projects.map((project) => (
            <Project key={project.name} project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const projectsCollection = collection(db, "projects");
  const data = await getDocs(projectsCollection);
  const projects = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
  console.log(projects);
  return {
    props: {
      projects,
    }
  }
}