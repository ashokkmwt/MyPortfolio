import React from 'react'
import styles from './index.module.css'
import TwitterIcon from '../../assets/images/twitterIcon.png'
import InstagramIcon from '../../assets/images/instagramIcon.png'
import { useNavigate } from 'react-router-dom'

export default function MainPage() {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.mainPage}>
                <div className={styles.mainPageText}>
                    <div className={styles.detail_1}>
                        <h1 onClick={() => navigate("about")}>About Me</h1>
                        <h1 onClick={() => navigate("education")}>Education</h1>
                    </div>
                    <div className={styles.detail_2}>
                        <h1 onClick={() => navigate("skills")}>Skills</h1>
                        <h1 onClick={() => navigate("contact")}>Contact</h1>
                    </div>
                    <div className={styles.detail_3}>
                        <h1 onClick={() => navigate("projects")}>Projects</h1>
                    </div>
                    <div className={styles.detail_4}>
                        <a href='https://www.linkedin.com' target="_blank" rel="noreferrer" className={styles.linkedIn}>
                            <h1>in</h1>
                        </a>
                        <a href='https://www.twitter.com/' target="_blank" rel="noreferrer" className={styles.twitter_icon}>
                            <img width="100%" height="100%" src={TwitterIcon} alt="Twitter" />
                        </a>
                        <a href='https://www.instagram.com/' target="_blank" rel="noreferrer" className={styles.instagram_icon}>
                            <img width="100%" height="100%" src={InstagramIcon} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div >
        </>
    )
}
