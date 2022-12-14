import React from 'react'
import styles from './index.module.css'
import TwitterIcon from '../../assets/images/twitterIcon.png'
import InstagramIcon from '../../assets/images/instagramIcon.png'
import { useNavigate } from 'react-router-dom'
import MyProfile from '../../assets/images/newProfile.jpeg'

export default function MainPage() {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.mainPage}>
                <div className={styles._profile}>
                    <div className={styles.backgroundImg}>
                        <img className={styles.backgroundImg} width="100%" height="100%" src={MyProfile} alt="profile" />
                    </div>
                    <h1 className={styles.bio}>Ashok Kumawat</h1>
                    <h1 className={styles.bio}>Web App Developer</h1>
                </div>
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
                        <a href='https://www.linkedin.com/in/ashok-kumawat-ab270723b/' target="_blank" rel="noreferrer" className={styles.linkedIn}>
                            <h1>in</h1>
                        </a>
                        <a href='https://twitter.com/ASHOKKU77882283' target="_blank" rel="noreferrer" className={styles.twitter_icon}>
                            <img width="100%" height="100%" src={TwitterIcon} alt="Twitter" />
                        </a>
                        <a href='https://www.instagram.com/ashok_kumawat_1111/saved/' target="_blank" rel="noreferrer" className={styles.instagram_icon}>
                            <img width="100%" height="100%" src={InstagramIcon} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div >
        </>
    )
}
