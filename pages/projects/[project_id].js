import ProjectDetails from '../../components/project/ProjectDetails'
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function Project({project}) {
  return (
    <ProjectDetails project={project}/>
  )
}

export async function getServerSideProps(context) {
  const {project_id} = context.query

  const projectRef = doc(db, "projects", project_id);
  const docSnap = await getDoc(projectRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  return {
    props: {
      project: docSnap.data()
    }
  }
}