import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css';
import './scss/preloader.css';

const loading = () => <div className="page-loader">
                        <div className="preloader pls-white">
                          <svg className="pl-circular" viewBox="25 25 50 50">
                            <circle className="plc-path" cx={ 50 } cy={ 50 } r={ 20 } />
                          </svg>
                        </div>
                      </div>;

// Containers
const Layout = React.lazy(() => import('./components/Layout/Layout.jsx'));

// Pages
const Page404 = React.lazy(() => import('./views/Page404/Page404.jsx'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route path="/" name="Home" render={props => <Layout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
