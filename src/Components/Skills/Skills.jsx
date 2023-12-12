import React from 'react'
import './Skills.css'
import UIdesign from "../Assets/ui-design.png"
import WebDesign from '../Assets/website-design.png'
import AppDesign from '../Assets/app-design.png'
export const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">About me</span>
        <span className="skillDescription">
        Hello, I'm Aadithya, a dedicated web developer with a passion for crafting seamless and visually appealing user experiences. With a strong foundation in frontend development, I'm actively seeking opportunities for both internships and full-time positions. My daily routine revolves around honing my skills through hands-on practice, tackling diverse projects, and continuously enhancing my problem-solving abilities. I thrive on creating elegant and functional websites that marry aesthetics with functionality. If you're looking for a motivated and adaptable web developer, I'm excited to bring my expertise to your team.
         </span>
         <div className='techskills'>
            <div className='qualification'>
                <h3>QUALIFICATION</h3>
                <div className='sch'>
                    <p>BCA IN COMPUTER APPLICATION</p>
                    <p>GURU NANAK COLLEGE</p>
                    <p>UNIVERSITY OF MADRAS</p>
                    <p>2020-2023</p>
                </div>
                <div className='sch'>
                    <p>HIGHER SECONDARY SCHOOLING</p>
                    <p>PMS MAT HR SEC SCHOOL</p>
                    <p>2019-2020</p>
                </div>
                <div className='sch'>
                    <p>SECONDARY LEVEL SCHOOLING</p>
                    <p>PMS MAT HR SEC SCHOOL</p>
                    <p>2017-2018</p>
                </div>
            </div>
         </div>
         <div className="techskills1">
            <h3>TECHNICAL SKILLS</h3>
            <div className="tech">
                <p><span>HTML:  </span>Experience: 6months</p>
            </div>
            <div className="tech">
                <p><span>CSS:</span>  Experience: 6months</p>
                </div>
            <div className="tech">
                <p><span>JAVASCRIPT:</span> Experience: 6months</p>
                          </div>
            <div className="tech">
                <p><span>REACT JS:</span>  Experience: 3months</p>
            </div>
            <div className="tech">
                <p><span>SQL: </span>Experience: 4months</p>
            </div>
            <div className="tech">
                <p><span>CORE JAVA:</span>  Experience: 5 months</p>
            </div>
         </div>

        <div className="skillsBars">
            <div className="skillBar">
                <img src={UIdesign} alt=""  className='skillBarImg'/>
                <div className="skillBarText">
                    <h3>Javascript projects</h3>
                    <p><b>Experience:</b> 6 months</p>
                    <p><b>projects:</b>Made 10 projects</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt=""  className='skillBarImg'/>
                <div className="skillBarText">
                    <h3>React js projects</h3>
                    <p><b>Experience :</b>3 months</p>
                    <p><b>projects   : </b> Made 4 projects</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt=""  className='skillBarImg'/>
                <div className="skillBarText">
                    <h3>Landing websites</h3>
                    <p><b>Experience : </b>3 months</p>
                    <p>Made 3 websites</p>
                    <p></p>
                </div>
            </div>
        </div>
    </section>
  )
}
