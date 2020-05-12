import React from 'react'
import {Link} from "react-router-dom"

function Activite(){
	return(
		<div className="activite">
	        <h1 className="title">Secteurs d'activité et spécialisation :</h1>
	        <div className="flex-container">
	            <p className="one"><strong>HYDROPROTEC CONSULT</strong> intervient dans plusieurs domaines d'activités. Les domaines d'intervention d'<strong>HYDROPROTEC-CONSULT</strong> sont axés essentiellement autour de l'aménagement, l'eau, l'assainissement liquide et solide ainsi que la protection
	                    et la valorisation du milieu environnant et la sensibilisation des usagers sur les problèmes liés à la protection des ressources et les bénéfices socio-économique et sanitaire qui en découlent.</p>
	            <div className="two">
	                <Link to="/activités"><img className="arrow" src={ require('../pics/plus-arrow.png') } alt={""}/></Link>
	            </div>
	        </div>
	    </div>
	)
}

export default Activite