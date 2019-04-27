import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import {AppHeader} from '@coreui/react';

import { connect } from 'react-redux';
// routes config
import { Preloader, Notification} from '../../components';

import routes from '../../routes';
import DefaultHeader from './DefaultHeader';

class Layout extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let render_views, admin_views;

		admin_views = routes.find ((route ) => {
			return route.path === this.props.location.pathname;
		});

		if( admin_views !== undefined){
			render_views = ( <Route path={ admin_views.path } exact={ admin_views.exact } name={ admin_views.name } render={ (props) => ( <admin_views.component {...props} /> )} /> );
		}else {
			render_views = ( <Redirect from="/" to="/404" /> );
		}

		return (
			<div className="app">
				<AppHeader fixed>
					<DefaultHeader />
				</AppHeader>
				<div className="app-body">
					<main className="main p-20">
						<Container className="" fluid>
							{ render_views }
						</Container>
					</main>
				</div>
				<Preloader />
				<Notification />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		session: state.clientReducer.session,
		errors: state.notificationReducer.errors,
		lang: state.clientReducer.json_lang,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);