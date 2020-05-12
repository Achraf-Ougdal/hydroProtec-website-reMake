import React from 'react'

function Carte(){
	return(
		<div className="card">
	        <div className="flex-container">
	            <div className="two">
	            	<img src={ require('../pics/maroc.png') } alt={""}/>
	            </div>
	            <div className="carte">
	                <h1 className="mot">17 ans d'<strong>Excellence</strong></h1>
	            </div>
	        </div>
	    </div>
	)
}

export default Carte