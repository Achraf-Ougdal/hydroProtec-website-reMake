import React from 'react'
import "../styles/Home.css"
import Welcome from "../components/Welcome"
import Presentation from "../components/Presentation"
import Activite from "../components/Activite"
import References from "../components/References"
import Moyens from "../components/Moyens"
import Carte from "../components/Carte"

function Home(){
	return (
		<div className='main'>
			<Welcome />
	        <Presentation />
	        <Activite />
	        <hr/>
	        <References />
	        <hr/>
	        <Moyens />
	        <hr/>
	        <Carte />
        </div>
	)
}

export default Home