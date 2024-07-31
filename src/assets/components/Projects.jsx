function Projects( ){
    const goToContact = () => {
        location.href = './#contact';
    }
    const goToFrontEndGitHub = () => {
        window.open('https://github.com/Ahuss98/NCN-FE', '_blank');
    }
    
    const goToFrontEndLinkedIn = () => {
        window.open('https://www.linkedin.com/feed/update/urn:li:activity:7174462169294520322/', '_blank');
    }
    
    const goToLiveSite = () => {
        window.open('https://ncn-network.netlify.app/', '_blank');
    }
    
    const goToBackEndGitHub = () => {
        window.open('https://github.com/Ahuss98/NCN-BE', '_blank');
    }
    
    const goToBackEndLinkedIn = () => {
        window.open('https://www.linkedin.com/feed/update/urn:li:activity:7167617275766771712/', '_blank');
    }
    
    const goToAppGitHub = () => {
        window.open('https://github.com/keireasterbrook/iTinerary-chain-reaction?tab=readme-ov-file', '_blank');
    }
    
    const goToAppLinkedIn = () => {
        window.open('https://www.linkedin.com/feed/update/urn:li:activity:7182980228493774848/', '_blank');
    }
    
    const goToAppPresentation = () => {
        window.open('https://northcoders.com/project-phase/itinerary', '_blank');
    }
    const goToHussainFitGithub = () => {
        window.open('https://github.com/Ahuss98/HussainMMA', '_blank')
    }
    const goToHussainFitLinkedIn = () => {
        window.open('https://www.linkedin.com/feed/update/urn:li:activity:7215724347989131264/', '_blank')
    }
    const goToHussianFit =() => {
        window.open('https://main--hussainfitness.netlify.app/', '_blank')
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
                    <h2 className="experience-sub-title project-title">NCN NEWS</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToFrontEndGitHub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToFrontEndLinkedIn}>
                            LinkedIn
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToLiveSite}>
                            Live site
                        </button>
                    </div>
                </div>
                <div className="details-container color-conaitiner">
                    <div className="article-container">
                        <img 
                        src="images/BE-Project-pic.png" 
                        alt="my back end project snapshot"
                        className="project-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">NCN API</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToBackEndGitHub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToBackEndLinkedIn}>
                            LinkedIn
                        </button>
                    </div>
                </div>
                <div className="details-container color-conaitiner">
                    <div className="article-container">
                        <img 
                        src="images/APP-Project-pic.png" 
                        alt="my app project snapshot"
                        className="project-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title"> iTinerary App</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToAppGitHub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToAppLinkedIn}>
                            LinkedIn
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToAppPresentation}>
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className="details-container color-conaitiner">
                    <div className="article-container">
                        <img 
                        src="images/HussainFit-pic.png" 
                        alt="my app project snapshot"
                        className="project-img" 
                        />
                    </div>
                    <h2 className="experience-sub-title project-title">Hussain-Fitness</h2>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={goToHussainFitGithub}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToHussainFitLinkedIn}>
                            LinkedIn
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={goToHussianFit}>
                            Live site
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