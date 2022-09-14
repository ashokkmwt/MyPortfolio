import React from 'react'
import styles from './index.module.css'
import backArrow from '../../assets/images/backArrow.svg'
import { useNavigate } from 'react-router-dom';

export default function Projects() {

  const navigate = useNavigate();

  const _projects = [
    {
      heading: "1). Google Task Clone",
      description: "- Tried to create a Google Task Clone.This is my BIGGEST project ever. I learned a lot from this project.",
      functionality: "HTML, CSS, ReactJS, Redux, Redux-Persist",
      frameLink: "https://www.loom.com/embed/556a7d3531e044c5913b4883bb79234f",
      title: "This is a todo app",
      url: "https://google-task-clone.netlify.app"
    },
    {
      heading: "2). ScoreKeeper App",
      description: "- Tried to create a simple score keeper app. It's fully responsive.",
      functionality: "HTML, CSS, ReactJS, Redux, Redux-Persist.",
      frameLink: "https://www.loom.com/embed/5f0a5eef71834baa9c60d5315ac54f9d",
      title: "This is a scoreKeeper app",
      url: "https://scorekeeper-react-app.netlify.app"
    },
    {
      heading: "3). YouTube Clone",
      description: "- Trying to create YouTube.",
      functionality: "- Created using React Js, React-Router, Zustand, axios, useEffect hook, useNavigate hook.",
      frameLink: "https://www.loom.com/embed/6f3c40cee63d48af9addd1af3eb60871",
      title: "This is YouTube Clone",
      url: "https://akyoutubeclone.netlify.app"
    },
    {
      heading: "4). Tweet Page",
      description: "- You can tweet here.",
      functionality: "- Created using HTML, CSS, REACT JS, REDUX.",
      frameLink: "https://www.loom.com/embed/53f3d45dbef84db2955a5579cf8288da",
      title: "This is a tweet page",
      url: "https://twitter-tweet-page.netlify.app"
    },
    {
      heading: "5). Hubhopper Clone",
      description: "- Just creating UI.",
      functionality: "- Created using HTML and CSS.",
      frameLink: "https://www.loom.com/embed/826b1fa7e78141f090a18480fda7b354",
      title: "This is a clone of hubhopper site.",
      url: "https://hubhopper-clone.netlify.app/"
    },
    {
      heading: "6). Fitness App",
      description: "- This is just a UI.",
      functionality: "- Created using HTML and CSS.",
      frameLink: "https://www.loom.com/embed/13e04eaeebcf482b810e80eca165b098",
      title: "This is YouTube Clone",
      url: "https://my-gym-fitness-app.netlify.app"
    },
    {
      heading: "7). Task Management App",
      description: "- Manage your tasks here.",
      frameLink: "https://www.loom.com/embed/8b6932ed15c047efa96e97d6eacb4388",
      title: "This is a todo app",
      url: "https://task-management-web-app.netlify.app"
    },
    {
      heading: "8). Counter App",
      description: "- it's useful for counting.",
      functionality: "- Created using React Js.",
      frameLink: "https://www.loom.com/embed/cc0d269388da4a0fab0ffda68bbe377e",
      title: "This is countApp",
      url: "https://my-counting-web-app.netlify.app/"
    }
  ]


  return (
    <div className={styles.projectParent}>
      <div onClick={() => navigate("/")} className={styles.backArrowImage}>
        <img width="100%" height="100%" src={backArrow} alt="back arrow" />
      </div>
      {_projects.map(project => {
        const { heading, description, functionality, frameLink, title, url } = project
        const id = Math.ceil(Math.random() * 1000000);
        return (
          <div key={id} className={styles.projectChild}>
            <h2 className={styles._fs}>{heading}</h2>
            <h4>{description}</h4>
            <h4>{functionality}</h4>
            <a href={url} target='_blank' rel="noreferrer" >
              <h4 className={styles._cl}>- Click here to Visit My Project</h4>
            </a>
            <br /><br />
            <div className={styles.projectVideo}>
              <iframe src={frameLink} title={title} className={styles.videoFrame}></iframe>
            </div>
          </div>
        )
      })}
    </div>
  )
}