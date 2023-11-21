import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';


const ResumePage = () => {

  return (
    <>
      <h3>
        <a href="./resume.pdf" className={styles.link} download>Resume</a>
        </h3>
      <div className={styles.container}>
        <iframe src="./resume.pdf" width="100%" height="400px" />
      </div>
      <br/> <br/>
      <a href="https://docdro.id/a6RFj7h" className={styles.link} target="_blank">Check my 2020 portfolio here </a> :D
    </>
  );
};

export async function getStaticProps() {

  return {
    props: { title: 'Resume' },
  };
}

export default ResumePage;
