import React from "react";
import styles from './index.module.css'
import backArrow from '../../assets/images/backArrow.svg'
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
    const navigate = useNavigate();

    return (
        <div className={styles.aboutMeParent}>
            <div onClick={() => navigate("/")} className={styles.backArrowImage}>
                <img width="100%" height="100%" src={backArrow} alt="back arrow" />
            </div>
            <div className={styles.aboutMeChild}>
                <h4 className={styles.myName}><span className={styles._fs}>Since</span> you found your way here, let me give you a little bit of background!<br /><br />

                    I hail from Bhilwara, a small city in Rajasthan, I didn't study computer science, but I've started my journey as a web developer and I'm really enjoying it. I'm transitioning my career from UPSC aspirant to a web developer.<br /><br />

                    I'm an intermediate react developer and constantly improving my ReactJS and Vanilla JavaScript skills.<br /><br />

                    If you're interested in working with me on web app development?<br /><br />

                    Shoot me a DM or email me at 📩 <span className={styles._fs2}>sendtoashokkumawat@gmail.com</span>. Let's chat over a digital coffee! ☕</h4>
            </div>
        </div>
    )
}