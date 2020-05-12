import React from "react"
import { HashLink } from 'react-router-hash-link';

function Welcome(){
	return(
		<div className="home">
	         <h1 style={{fontWeight: "700", fontSize:"62px"}}>Bienvenue sur le site web de <br/> <span>Hydroprotec Consult</span>
	            </h1>
	         <HashLink  to="/#presentation"><img className="arrow" src={ require('../pics/down-arrow.png') } alt={""}/></HashLink>
	    </div>
	)
}

export default Welcome