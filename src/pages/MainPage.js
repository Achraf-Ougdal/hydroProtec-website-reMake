import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Home from './Home'
import NotFound from "./404"
import Header from "./Header"
import Activite from "./Activite"
import References from "./References"
import Moyens from "./Moyens"
import About from "./About"
import Contact from "./Contact"

function MainPage(){
	return(
		<Router>
			<Header />
	       	<Switch>
		        <Route exact path="/" component={Home}/>
		        <Route exact path="/activités" component={Activite}/>
		        <Route exact path="/références" component={References}/>
		        <Route exact path="/moyens" component={Moyens}/>
		        <Route exact path="/about" component={About}/>
		        <Route exact path="/contact" component={Contact}/>
		        <Route exact path="/404"component={NotFound} />
	        	<Redirect to="/404" />
	        </Switch>
      	</Router>
	)
}

export default MainPage