import React from 'react'
import {Link} from "react-router-dom"

function Moyens(){
	return(
		<div className="card">
	        <h1 className="title">Moyens :</h1>
	        <div className="flex-container">
	            <p className="one">A <strong>HYDROPROTEC-CONSULT</strong>, les missions sont assurées par une équipe dynamique de spécialistes, d’ingénieurs et d'animateurs ayant une expérience confirmée dans le domaine de l’ingénierie, des études socio-économiques et de la communication, encadré par un réseau d’experts <strong>nationaux</strong> et <strong>internationaux</strong>.</p>
	            <div className="two">
	                <Link to="/moyens"><img className="arrow" src={ require('../pics/plus-arrow.png') } alt={""}/></Link>
	            </div>
	        </div>
	    </div>
	)
}

export default Moyens