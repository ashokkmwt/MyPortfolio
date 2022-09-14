import React from 'react'
import styles from './index.module.css'
import backArrow from '../../assets/images/backArrow.svg'
import { useNavigate } from 'react-router-dom';

export default function ContactPage() {
    const navigate = useNavigate();
    return (
        <div id='contact' className={styles.contactContainer}>
            <div onClick={() => navigate("/")} className={styles.backArrowImage}>
                <img width="100%" height="100%" src={backArrow} alt="back arrow" />
            </div>
            <div className={styles.contact}>
                <h2>Contact Me: 9521719607</h2><br />
                <h2>Gmail: sendtoashokkumawat@gmail.com </h2>
            </div>
        </div>
    )
}
