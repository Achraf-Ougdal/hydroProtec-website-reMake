import React from 'react';
import {Link} from "react-router-dom"
import "../styles/Header.css"

function Header(){
	return(
		<div className="header">
			<div className="header-img-container">
	        	<Link to="/"><img className="header-img" src={ require('../pics/Logo.jpg') } alt={""}  /></Link>
	        </div>
	        <div className="nav-container">
		        <div className="nav">
		            <Link to="/" className="nav-link">ACCUEIL</Link>
		            <Link to="/activités" className="nav-link">ACTIVITES</Link>
		            <Link to="/références" className="nav-link">REFERENCES</Link>
		            <Link to="/moyens" className="nav-link">MOYENS</Link>
		            <Link to="/about" className="nav-link">A PROPOS</Link>
		            <Link to="/contact" className="nav-link contact">CONTACT</Link>
		        </div>
	        </div>
    	</div>
	)
}

export default Header