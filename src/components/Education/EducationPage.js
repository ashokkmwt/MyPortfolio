import React from 'react'
import styles from './index.module.css'
import backArrow from '../../assets/images/backArrow.svg'
import { useNavigate } from 'react-router-dom';

export default function EducationPage() {
    const navigate = useNavigate();
    return (
        <div id='education' className={styles.educationPage}>
            <div onClick={() => navigate("/")} className={styles.backArrowImage}>
                <img width="100%" height="100%" src={backArrow} alt="back arrow" />
            </div>
            <div className={styles.educationContainer}>
                <h1 className={styles.noHover}>Hello</h1><br />
                <h2>I am Ashok Kumawat</h2><br />
                <h3>I'm BSC graduated from GOVT College Bhilwara.</h3>
            </div>
        </div>
    )
}