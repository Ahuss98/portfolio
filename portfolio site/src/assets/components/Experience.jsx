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
                        <img src="images/Front-End.png" alt="" className="banner-nc"/>
                        <div className="article-container">
                            <article>
                                <img src="images/html-5.svg" alt="" />
                                <h3>HTML</h3>
                            </article>
                            <article>
                                <img src="images/css-3.svg" alt="" />
                                <h3>CSS</h3>
                            </article>
                            <article>
                                <img src="images/javascript-js.svg" alt="" />
                                <h3>JavaScript</h3>
                            </article>
                            <article>
                                <img src="images/react.svg" alt="" />
                                <h3>React</h3>
                            </article>
                            
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Back-End</h2>
                        <img src="images/Back-End.png" alt="" className="banner-nc"/>
                        <div className="article-container">
                            <article>
                                <img src="images/express-icon.png" alt="" />
                                <h3>Express.js</h3>
                            </article>
                            <article>
                                <img src="images/node.svg" alt="" />
                                <h3>Node.js</h3>
                            </article>
                            <article>
                                <img src="images/psql-icon.png" alt="" />
                                <h3>PostgresSql</h3>
                            </article>
                            <article>
                                <img src="images/jest-icon.png" alt="" />
                                <h3>Jest</h3>
                            </article>
                            <article>
                                <img src="images/git-icon.png" alt="" />
                                <h3>Git</h3>
                            </article>
                            <article>
                                <img src="images/npm-icon.png" alt="" />
                                <h3>NPM</h3>
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