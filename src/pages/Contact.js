import React from "react"
import "../styles/About-Contact.css"


function Contact(){
	return(
		<div>
			<div className="big-title">
		         <h1 >Contactez-nous</h1><br/>
		    </div>
		    <hr/>
		    <div className="contain">
				<div className="info">
					<p className="note">Adresse : 28 rue Dayat Aoua, Appartement n°6 Agdal Rabat</p>
					<p className="note">Tél : +212 (0) 537 683 639</p>
				</div>
				<div className="info">
					<p className="note">Fax : +212 (0) 537 776 190</p>
					<p className="note">email : contact@hydroprotec.ma</p>
				</div>
			</div>
		</div>
	)
}

export default Contact