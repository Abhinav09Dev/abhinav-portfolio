import React from 'react'
import styles from './SkillsStyle.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from '../../components/SkillList'
import { useTheme } from '../../components/ThemeContext'

const Skills = () => {
  const {theme, setTheme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skill={'HTML'}/>
            <SkillList src={checkMarkIcon} skill={'CSS'}/>
            <SkillList src={checkMarkIcon} skill={'Javascript'}/>
            <SkillList src={checkMarkIcon} skill={'Typescript'}/>
            <SkillList src={checkMarkIcon} skill={'NodeJS'}/>
        </div>
        <hr />
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skill={'Express'}/>
            <SkillList src={checkMarkIcon} skill={'React'}/>
            <SkillList src={checkMarkIcon} skill={'Angular'}/>
            <SkillList src={checkMarkIcon} skill={'Python '}/>
        </div>
        <hr />
        <div className={styles.skillsList}>
            <SkillList src={checkMarkIcon} skill={'Bootstrap'}/>
            <SkillList src={checkMarkIcon} skill={'Git'}/>
        </div>
    </section>
  )
}

export default Skills