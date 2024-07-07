function Experience(){
    const goToProjects = () => {
        location.href = './#projects';
    }
    return(
        <section id="experience">
            <p className="section_text_1">My Current</p>
            <h1 className="title">Tech Stack</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Front-End</h2>
                        <img src="images/Front-End.png" alt="picture of me with northcoders logo behind me" className="banner-nc"/>
                        <div className="article-container">
                            <article>
                                <img src="images/html-5.svg" alt="html icon" />
                             
                            </article>
                            <article>
                                <img src="images/css-3.svg" alt="css icon" />
                               
                            </article>
                            <article>
                                <img src="images/javascript-js.svg" alt="javascript icon" />
                             
                            </article>
                            <article>
                                <img src="images/react.svg" alt="react icon" />
                          
                            </article>
                            
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Back-End</h2>
                        <img src="images/Back-End.png" alt="picture of me with my back facing camera" className="banner-nc"/>
                        <div className="article-container">
                            <article>
                                <img src="images/express-icon.png" alt="express icon" />
                            
                            </article>
                            <article>
                                <img src="images/node.svg" alt="node icon" />
                           
                            </article>
                            <article>
                                <img src="images/psql-icon.png" alt="pswl icon" />
                        
                            </article>
                            <article>
                                <img src="images/jest-icon.png" alt="jest icon" />
                            
                            </article>
                            <article>
                                <img src="images/git-icon.png" alt="git icon" />
                           
                            </article>
                            <article>
                                <img src="images/npm-icon.png" alt="npm icon" />
                              
                            </article>
                            
                        </div>
                    </div>
                </div>
            </div>
                <span id="xp-arrow" className="material-symbols-outlined arrow" onClick={goToProjects}>
                        arrow_downward
                </span>
        </section>
    )
}
export default Experience