function Projects( ){
    const goToFrontEndGitHub = () => {
        window.location.href =
			'https://github.com/Ahuss98/NCN-FE';
    }
    const goToFrontEndLinkedIn = () => {
        window.location.href =
			'https://www.linkedin.com/feed/update/urn:li:activity:7174462169294520322/';
    }
    const goToLiveSite = () => {
        window.location.href =
        'https://ncn-network.netlify.app/'
    }
    const goToBackEndGitHub = () => {
        window.location.href = 'https://github.com/Ahuss98/NCN-BE'
    }
    const goToBackEndLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/feed/update/urn:li:activity:7167617275766771712/'
    }
    const goToAppGitHub = () => {
        window.location.href = 'https://github.com/keireasterbrook/iTinerary-chain-reaction?tab=readme-ov-file'
    }
    const goToAppLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/feed/update/urn:li:activity:7182980228493774848/'
    }
    const goToAppPresentation = () => {
        window.location.href = 'https://northcoders.com/project-phase/itinerary'
    }
    return (
        <section id="projects">
            <p className="section_text_1">Browse my </p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="details-container color-conaitiner">
                    <div className="article-container">
                        <img 
                        src="images/FE-Project-pic.png" 
                        alt="my front end project snpashot"
                        className="project-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">Front-End Project</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToFrontEndGitHub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToFrontEndLinkedIn}>
                            LinkedIn Demo
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToLiveSite}>
                            Netlify site
                        </button>
                    </div>
                </div>
                <div className="details-container color-conaitiner">
                    <div className="article-container">
                        <img 
                        src="images/BE-Project-pic.png" 
                        alt="my front end project snpashot"
                        className="project-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">Back-End Project</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToBackEndGitHub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToBackEndLinkedIn}>
                            LinkedIn Demo
                        </button>
                    </div>
                </div>
                <div className="details-container color-conaitiner">
                    <div className="article-container">
                        <img 
                        src="images/APP-Project-pic.png" 
                        alt="my back end project snpashot"
                        className="project-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">App Group Project</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToAppGitHub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToAppLinkedIn}>
                            LinkedIn Demo
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToAppPresentation}>
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
        <div className="projectsBox">
        <div className="BEP">
        <h2>Back-End Projects</h2>
        <img  className='BE-img' src='images/Back-End.png'/>
        <h3>NCN-BE Project</h3>
        <h4>Tech Stack</h4>
        <ul>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>PSQL</li>
            <li>Express.js</li>
            <li>TDD</li>
            <li>Jest</li>
            <li>SuperTest</li>
            <li>axios</li>
        </ul>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7167617275766771712/">link to live demo on linked in</a> <br/>
            <a href="https://github.com/Ahuss98/NCN-BE">link to github repo</a>
        </div>
        <div className="FEP">
        <h2>Front-End Projects</h2>
        <img  className='BE-img' src='images/Front-End.png'/>
        <h3>NCN-FE Project</h3>
        <h4>Tech Stack</h4>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Lighthouse</li>
            <li>axios</li>
        </ul>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7174462169294520322/">link to live demo on linked in</a> <br/>
            <a href="https://github.com/Ahuss98/NCN-FE">link to github repo</a>
        </div>
        <div className="GP">
        <h2>Group Projects</h2>
        <h3>iTinarary</h3>
        <h4>Tech Stack</h4>
        <ul>
            <li>JavaScript</li>
            <li>React Ntive</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Expo</li>
            <li>axios</li>
            <li>mapbox api</li>
            <li>Firebase</li>
            <a href="https://northcoders.com/project-phase/itinerary">link to live demo on linked in</a> <br/>
            <a href="https://github.com/keireasterbrook/iTinerary-chain-reaction?tab=readme-ov-file">link to github repo</a>
        </ul>
        </div>
        </div>
        </section>
        
    )
}
export default Projects;