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
                <h4 className={styles.myName}>Hello, I'm Ashok.</h4>
                <h4 className={styles.myName}>I am BSC graduate. After being bored of preparing competitive exams, I started my journey as a</h4>
                <h4 className={styles._ul}>Web App Developer.</h4>
            </div>
        </div>
    )
}