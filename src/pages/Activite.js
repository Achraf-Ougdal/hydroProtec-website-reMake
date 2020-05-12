import React from "react"
import "../styles/Activite.css"


function Activite(){
	return(
		<div>
			<div className="big-title">
		         <h1 >Secteurs d'activité et spécialisation</h1><br/>
		    </div>
		    <hr/>
		    <p className="sub-text"><strong>HYDROPROTEC CONSULT</strong> intervient dans plusieurs domaines d'activités. Les domaines d'intervention d'<strong>HYDROPROTEC-CONSULT</strong> sont axés essentiellement autour de l'aménagement, l'eau, l'assainissement liquide et solide ainsi que la protection
	                    et la valorisation du milieu environnant et la sensibilisation des usagers sur les problèmes liés à la protection des ressources et les bénéfices socio-économique et sanitaire qui en découlent.</p>
		    <hr/>
		    <div className="card">
		        <h1 className="title">Environnement</h1>
		        <div className="card-container">
		        	<div className="normal-img">
		            	<img style={{width: "auto", maxHeight: "100%"}} src={ require('../pics/environnement.png') } alt={""}/>
		            </div>
		            <div className="text">
		                <ul>
		                	<li>Analyse environnementale des schemas directeurs d'assainissement liquide et solide </li>
		                    <li>Etude d'impact sur l'environnement des projets de développement (tourisme, industrie, habitat ..) </li>
		                    <li> Etude de la dépollution de l'eau, de l'air et du sol </li>
		                    <li>Gestion des sites sensibles en matière de biodiversité </li>
		                    <li>Audits environnementaux des unités industrielles </li>
		                    <li>Sensibilisation et communication environnementale. </li>
		                </ul>
		            </div>
	        	</div>
	    	</div>
	    	<br/>
	    	<hr/>
	    	<div className="card">
		        <h1 className="title">Dépollution industrielle</h1>
		        <div className="card-container">
		        	<div className="depollution-img">
		            	<img style={{width: "auto", maxHeight: "100%"}} src={ require('../pics/depollution.png') } alt={""}/>
		            </div>
		            <div className="text">
		                <ul>
		                    <li>Dépollution industrielle</li>
		                </ul>
		            </div>
	        	</div>
	    	</div><br/>
	    	<hr/>
	    	<div className="card">
		        <h1 className="title">Ressources en eau</h1>
		        <div className="card-container">
		        	<div className="normal-img">
		            	<img style={{width: "auto", maxHeight: "100%"}} src={ require('../pics/ressources.png') } alt={""}/>
		            </div>
		            <div className="text">
		                <ul>
		                    <li>Etudes géologiques, hydrologiques et hydrogéologiques </li>
		                    <li>Planification et gestion des ressources en eau </li>
		                    <li>Suivi quantitatif et qualitatif des rssources en eau</li>
		                    <li>Dégagement et valorisation des ressources en eau </li>
		                    <li>Délimitation des périmètres de protection </li>
		                    <li>Contrôle et rationalisation de l'utilisation des ressources </li>
		                    <li>Prévention de la pollution </li>
		                    <li>Ouvrages de lutte contre les inondations </li>
		                    <li>Information et sensibilisation sur la protection des ressources en eau </li>
		                </ul>
		            </div>
	        	</div>
	    	</div>
	    	<hr/>
	    	<div className="card">
		        <h1 className="title">Alimentation en eau potable</h1>
		        <div className="card-container">
		        	<div className="normal-img">
		            	<img style={{width: "auto", maxHeight: "100%"}} src={ require('../pics/eau-portable.png') } alt={""}/>
		            </div>
		            <div className="text">
		                <ul>
		                    <li>Alimentation en eau potable des zones rurales et urbaines </li>
		                    <li>Compagne de sensibilisation des populations rurales </li>
		                    <li>Stations de traitement d'eau potable </li>
		                    <li>Dimensionnement des ouvrages hydrauliques (stations de pompage, station de traitement, station de suppression, réservoirs)</li>
							<li>Contrôle forages, puits et constructions des équipements d'AEP en zones rurales </li>
		                    <li>Conduite d'amenée et réseaux de canalisation </li>
		                    <li>Suivi des travaux, contrôle et assistance technique. </li>
		                </ul>
		            </div>
	        	</div>
	    	</div>
	    	<hr/>
	    	<div className="card">
		        <h1 className="title">Assainissement liquide et solide</h1>
		        <div className="card-container">
		        	<div className="normal-img">
		            	<img style={{width: "auto", maxHeight: "100%"}} src={ require('../pics/sanitation.png') } alt={""}/>
		            </div>
		            <div className="text">
		                <ul>
		                    <li>Conception des réseaux d'assainissement </li>
		                    <li>Simulation numérique des réseaux d'assainissement </li>
		                    <li>Station de pompage, poste de relevage </li>
		                    <li>Contrôle des constructions et maintenance des équipements d'assainissement liquide et solide dans les douars </li>
		                    <li>Protection contre les crues (bassins de retenue des eaux de pluie, déversoirs d'orage, etc. .) </li>
		                    <li>Etudes institutionnelles et de recouvrement des coûts </li>
		                    <li>Suivi des travaux, contrôle et assistance technique. </li>
		                </ul>
		            </div>
	        	</div>
	    	</div>
	    	<hr/>
	    	<div className="card">
		        <h1 className="title">Traitement et valorisation des effluents industriels et urbains</h1>
		        <div className="card-container">
		        	<div className="normal-img">
		            	<img style={{width: "auto", maxHeight: "100%"}} src={ require('../pics/traitement.png') } alt={""}/>
		            </div>
		            <div className="text">
		                <ul>
		                    <li>Caractérisation des rejets </li>
		                    <li>Minimisation des flux polluants </li>
		                    <li>Optimisation des procédés industriels </li>
		                    <li>Conception des installations de stockage et de mise en décharges des produits, de matériaux et de déchets dangereux </li>
		                    <li>Conception des procédés de traitement industriel </li>
		                    <li>Réutilisation des eaux épurées </li>
		                    <li>Dessalement des eaux de mer </li>
		                    <li>Suivi des travaux, contrôle et assistance technique. </li>
		                </ul>
		            </div>
	        	</div>
	    	</div>
	    	<hr/>
	    	<div className="card">
		        <h1 className="title">Stratégies de développement</h1>
		        <div className="card-container">
		        	<div className="own-img">
		            	<img style={{width: "auto", maxHeight: "100%"}} src={ require('../pics/strategie.png') } alt={""}/>
		            </div>
		            <div className="text">
		                <ul>
		                    <li>Plan Directeur d'Aménagement Intégré des ressources en eau </li>
		                    <li>Stratégie et programmes de développement local, social et urbain </li>
		                    <li> Stratégie de gestion des ressources naturelles </li>
		                    <li>Stratégie de contrôle de la pollution </li>
		                </ul>
		            </div>
	        	</div>
	    	</div>
	    	<hr/>
	    	<div className="card">
		        <h1 className="title">Aménagement du territoire</h1>
		        <div className="card-container">
		        	<div className="territory-img">
		            	<img style={{maxWidth: "100%", maxHeight: "100%"}} src={ require('../pics/territoire.png') } alt={""}/>
		            </div>
		            <div className="text">
		                <ul>
		                    <li>Etude d'aménagement des sites touristiques </li>
		                    <li>Etude d'aménagement des zones industrielles </li>
		                    <li>Etude d'aménagement des décharges publiques </li>
		                    <li>Intégration paysagère des aménagements </li>
		                    <li>Analyse des concepts d'aménagement </li>
		                </ul>
		            </div>
	        	</div>
	    	</div>
	    	<hr/>
	    	<div className="card">
		        <h1 className="title">Accompagnement social et lutte contre l’habitat insalubre</h1>
		        <div className="card-container">
		        	<div className="own-img">
		            	<img src={ require('../pics/poor.PNG') } alt={""}/>
		            </div>
		            <div className="text">
		                <ul>
		                    <li>Accompagnement social dans les opérations de résorption de l'habitat insalubre </li>
		                    <li>Maîtrise d'ouvrage social (M.O.S) dans la résorption de l'habitat insalubre </li>
		                    <li>Accompagnement et intégration sociale des populations </li>
		                    <li>Insertion économique des populations fragiles et touchées par l'analphabétisme </li>
		                    <li>Développement d'associations thématiques.</li>
		                </ul>
		            </div>
	        	</div>
	    	</div>
	    	<hr/>
	    	<div className="card">
		        <h1 className="title">Etudes générales</h1>
		        <div className="card-container">
		        	<div className="special">
		            	<img style={{maxWidth: "100%", maxHeight: "100%"}} src={ require('../pics/etudes.png') } alt={""}/>
		            </div>
		            <div className="text">
		                <ul>
		                    <li>Etudes d'organisation et de gestion </li>
		                    <li>Etudes législatives et normes environnementales </li>
		                    <li>Etudes socio-démographiques </li>
		                    <li>Ingénierie de formation </li>
		                    <li>Etudes socio-économiques </li>
		                    <li>Systèmes d'information. </li>
		                </ul>
		            </div>
	        	</div>
	    	</div>
	    </div>
	)
}

export default Activite