import React, { useState } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import CourseSection from "../components/CourseSection"

const Projects = () => {
  const [basestatus, setBaseStatus] = useState(0)
  const [basevid, setBaseVid] = useState(0)
  const statusSetter = current_status => {
    setBaseStatus(current_status)
    console.log("base recieved status")
  }
  const vidSetter = current_vid_val => {
    setBaseVid(current_vid_val)
    console.log(current_vid_val)
  }
  return (
    <Layout>
      <div className={styles.banner}>
        <h2>HSF Software Training Center</h2>
        <h3>
          Training in software and computing are essential ingredients for the
          success of any HEP experiment. As most experiments have similar basic
          prerequisites (Unix shell, Python, C++, …) we want to join our efforts
          and create one introductory software training curriculum that serves
          HEP newcomers the software skills needed as they enter the field, and
          in parallel, instill best practices for writing software. The
          curriculum is comprised of a set of standardized modules, so that
          students can focus on what is most relevant to them.
        </h3>
        <div className={styles.layout}>
          <div className={styles.coursesection}>
            <CourseSection curr_status={basestatus} curr_vid={basevid} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects

//export page queries
