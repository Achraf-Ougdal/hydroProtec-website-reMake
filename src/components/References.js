import React from 'react'
import {Link} from "react-router-dom"

function References(){
	return(
		<div className="card">
	        <h1 className="title">Références :</h1>
	        <div className="flex-container">
	            <p className="one">De nombreux clients publics et privés nous ont fait appel à nos compétences pour les accompagner dans leurs projets, dans des domaines très variés.</p>
	            <div className="two">
	                <Link to="/références"><img className="arrow" src={ require('../pics/plus-arrow.png') } alt={""}/></Link>
	            </div>
	        </div>
	    </div>
	)
}

export default References