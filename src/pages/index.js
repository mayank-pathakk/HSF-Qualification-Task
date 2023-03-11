import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

const Projects = () => {
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
      </div>
    </Layout>
  )
}

export default Projects

//export page queries
