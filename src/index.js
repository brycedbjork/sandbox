import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Switch,
    Redirect,
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from "./components/Home"
import registerServiceWorker from './registerServiceWorker';

class App extends Component {

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={Home}/>
					<Redirect to="/"/>
				</Switch>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
