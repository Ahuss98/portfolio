function Projects( ){
    const goToContact = () => {
        location.href = './#contact';
    }
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
                <div className="about-containers">
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
            </div>
            <span id="projects-arrow" className="material-symbols-outlined arrow" onClick={goToContact}>
                        arrow_downward
                </span>
        </section>
        
    )
}
export default Projects;