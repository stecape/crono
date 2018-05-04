import React, { Component } from 'react'
import './App.css'
import Template from './Template/Template'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import Controls from './pages/Controls/Controls'
import Plants from './pages/Plants/Plants'
import Trends from './pages/Trends/Trends'
import Docs from './pages/Docs/Docs'
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/Login'


class App extends Component {
	state = {
		LoggedIn: true
	}

  render() {
  	var LoggedIn = this.state.LoggedIn
    return (
    	<div>
	    { LoggedIn &&	
				<BrowserRouter>
					<div className="container">
						<Template>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/controls" component={Controls} />
								<Route path="/plants" component={Plants} />
								<Route path="/trends" component={Trends} />
								<Route path="/docs" component={Docs} />
								<Route path="/admin" component={Admin} />
								<Route render={function() {
									return <p>Not Found</p>
								}} />
							</Switch>
						</Template>
					</div>
				</BrowserRouter>
			}

			{ !LoggedIn &&	
				<Login />
			}
			</div>
    )
  }
}

export default App;
