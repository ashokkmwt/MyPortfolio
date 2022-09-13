import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import backArrow from '../../assets/images/backArrow.svg'
import cx from 'classnames'

export default function Skills() {

    const navigate = useNavigate();

    return (
        <div className={styles.skillsParent}>
            <div onClick={() => navigate("/")} className={styles.backArrowImage}>
                <img width="100%" height="100%" src={backArrow} alt="back arrow" />
            </div>
            <h2 className={styles.skillsBar}>Skills</h2>
            <div className={styles.SkillsChild}>
                <div className={cx(styles.myskills1, styles._vrBorder)}><h4>HTML</h4></div>
                <div className={styles.myskills1}><h4>CSS</h4></div>
            </div>
            <div className={styles.SkillsChild}>
                <div className={cx(styles.myskills2, styles._vrBorder)}><h4>JavaScript</h4></div>
                <div className={styles.myskills2}><h4>React JS</h4></div>
            </div>
            <div className={styles.SkillsChild}>
                <div className={cx(styles.myskills3, styles._vrBorder)}><h4>Git/GitHub</h4></div>
                <div className={styles.myskills3}><h4>Redux</h4></div>
            </div>
            <div className={styles.SkillsChild}>
                <div className={cx(styles.myskills4, styles._vrBorder)}><h4>Zustand</h4></div>
                <div className={styles.myskills4}><h4>React Hooks</h4></div>
            </div>
            <div className={styles.SkillsChild}>
                <div className={cx(styles.myskills5, styles._vrBorder)}><h4>JSON</h4></div>
                <div className={styles.myskills5}><h4>Rest API</h4></div>
            </div>
            <div><h2 className={styles.new}>...Continue</h2></div>
        </div>
    )
}
