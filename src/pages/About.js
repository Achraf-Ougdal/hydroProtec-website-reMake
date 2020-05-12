import React from "react"
import "../styles/About-Contact.css"

function About(){
	return(
		<div>
			<div className="big-title">
		         <h1 >A propos d'Hydroprotec Consult</h1><br/>
		    </div>
		    <hr/>
		    <div className="contain">
				<div className="info">
					<p className="note">Raison sociale : HYDROPROTEC-CONSULT</p>
					<p className="note">Adresse : 28 Dayat Aoua, Appartement n°6 Agdal Rabat</p>
					<p className="note">Téléphone : 05 37 68 36 39</p>
					<p className="note">Fax : 05 37 77 61 90</p>
					<p className="note">Régime juridique : Société à Responsabilité Limitée (S.A.R.L)</p>
					<p className="note">Capital Social : 1 000 000 dhs</p>
				</div>
				<div className="info">
					<p className="note">Registre de Commerce : N° 55 783</p>
					<p className="note">Patente : N°25770678</p>
					<p className="note">Identification Fiscale : N°03333511</p>
					<p className="note">C.N.S.S : N° 6450697</p>
					<p className="note">Personnes habilitées à agir au nom de la société :</p>
					<p className="note">Gérant : Mme BOUCHAREB NOUZHA</p>
				</div>
			</div>
		</div>
	)
}

export default About