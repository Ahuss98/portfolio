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
                                <img src="images/html-icon.png" alt="html icon" />
                                <h5>HTML</h5>
                            </article>
                            <article>
                                <img src="images/css-icon.png" alt="css icon" />
                                <h5>CSS</h5>
                            </article>
                            <article>
                                <img src="images/js-icon.png" alt="javascript icon" />
                                <h5>JavaScript</h5>
                            </article>
                            <article>
                                <img src="images/react-icon.png" alt="react icon" />
                                <h5>React</h5>
                            </article>
                            
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Back-End</h2>
                        <img src="images/Back-End.png" alt="picture of me with my back facing camera" className="banner-nc"/>
                        <div className="article-container">
                            <article>
                                <img src="images/express-icon.png" alt="express icon" />
                                <h5>Express</h5>
                            </article>
                            <article>
                                <img src="images/node.png" alt="node icon" />
                                <h5>Node</h5>
                            </article>
                            <article>
                                <img src="images/psql-icon.png" alt="pswl icon" />
                                <h5>PostgreSQL</h5>
                            </article>
                            <article>
                                <img src="images/jest-icon.png" alt="jest icon" />
                                <h5>Jest</h5>
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