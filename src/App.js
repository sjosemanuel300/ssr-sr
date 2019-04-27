import React, { Component }           		from 'react';
import { BrowserRouter, Route, Switch }  		from 'react-router-dom';

// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css';
import './scss/preloader.css';

// Containers
import Layout  from './components/Layout/Layout.jsx';
// Pages
import {Page404} from './views';

class App extends Component {

  	render() {
    	return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/404" name="Página 404" component={Page404} />
					<Route path="/" name="Home" render={props => <Layout {...props}/>} />
				</Switch>
			</BrowserRouter>
    	);
  	}
}

export default App;
