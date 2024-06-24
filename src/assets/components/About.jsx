import { useState } from "react";
import { useEffect } from "react";

function About(){
    const [selectedBtn, setSelectedBtn] = useState(null);

    const [about,setAbout] = useState([{img:"images/NC-logo.png",h3:'Experience',p:'Completed a 13-Week Full Stack Software Development Bootcamp as a Trainee Software Developer at Northcoders focusing on a PERN Stack'}])
    const goToProjects = () => {
        location.href = './#experience';
    }
   
        const toggleAbout = (info) =>{
            if(info === 'exp'){
                setAbout([{img:"images/NC-logo.png",h3:'Experience',p:'Completed a 13-Week Full Stack Software Development Bootcamp as a Trainee Software Developer at Northcoders focusing on a PERN Stack'}])
            }
            if(info === 'edu'){
                setAbout([{img:"images/Education-logo.png",h3:'Education',p:'Studied Computer Systems Engineering at the University of Kent and completed A-Levels in Maths, Economics and Phisics'}])
            }
            if(info === 'PI'){
                setAbout([{img:"images/PI-logo.png",h3:'Personal Info',p:'A Career changer from a Personal Trainer and Amateur Fighter. I love to solve problems and take on challenges, currently chasing my Black Belt as a Software Developer.'}])
            }
            setSelectedBtn(info);
        }

 
    return(
    <section id="about">
        <p className="section_text_1">Get to know more</p>
        <h1 className="title">About me</h1>
        <div className="section-container">
            <div className="section_pic-container">
                <img src="images/about-pic.png" alt="profile picture overlooking mountain" className="about-pic" />
            </div>
            <div className="about-details-container">
                <div className="btn-container-about">
                    <button className={`btn exp-btn ${selectedBtn === 'exp' ? 'selected-btn' : ''}`} onClick={() => toggleAbout('exp')}> <img src="images/NC-logo.png" alt="" /></button>
                    <button className={`btn edu-btn ${selectedBtn === 'edu' ? 'selected-btn' : ''}`} onClick={() => toggleAbout('edu')}>  <img src="images/Education-logo.png" alt="" /></button>
                    <button className={`btn personalInfo-btn ${selectedBtn === 'PI' ? 'selected-btn' : ''}`} onClick={() => toggleAbout('PI')}><img src="images/PI-logo.png" alt="" /></button>
                </div>
                <div className="about-containers">
                    <div className="details-container">
                    {about.map((aboutObj,index) => {
                        return(
                        <div key={index}>
                        <img src={aboutObj.img} alt="logo of northcoders" className="about-logo"/>
                        <h3>{aboutObj.h3}</h3>
                        <p>{aboutObj.p}</p>
                        </div>
                        )
                        
                    })}
                    </div>
                </div>
                
            </div>
        </div>
                <span className="material-symbols-outlined arrow" onClick={goToProjects}>
                        arrow_downward
                </span>
    </section>
    )
}
export default About;