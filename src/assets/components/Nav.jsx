import React, { useState } from "react";

function Nav() {
	const toggleMenu = () => {
		const menu = document.querySelector('.menu-links');
		const icon = document.querySelector('.hamburger-icon');
		menu.classList.toggle('open');
		icon.classList.toggle('open');
	};
		const [isOpen, setIsOpen] = useState(false);
	const toggleHam = () => {
	  setIsOpen(!isOpen);
	};
	return (
		<>
			<nav id="desktop-nav">
				<div className="logo">Ahmed Hussain</div>
				<div>
					<ul className="nav-links">
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#experience">Tech Stack</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
			<nav id="hamburger-nav">
				<div className="logo">Anes Motam</div>
				<div className="hamburger-menu">
				<div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleHam}>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
					<div className={`menu-links ${isOpen ? 'open' : 'collapsed'}`}>
						<li>
							<a href="#about" onClick={toggleHam}>
								About
							</a>
						</li>
						<li>
							<a href="#experience" onClick={toggleHam}>Tech Stack</a>
						</li>
						<li>
							<a href="#projects" onClick={toggleHam}>
								Projects
							</a>
						</li>
						<li>
							<a href="#contact" onClick={toggleHam}>
								Contact
							</a>
						</li>
					</div>
				</div>
			</nav>
		</>
	);
}
export default Nav;
