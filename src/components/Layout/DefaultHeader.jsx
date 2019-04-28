import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import { AppNavbarBrand } from '@coreui/react';
import SwitchLang from './SwitchLang.jsx';
import logo from '../../assets/logo.png'
import { connect } from 'react-redux';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  	render() {
		return (
			<React.Fragment>
				<AppNavbarBrand href="/" full={{ src: logo, width: 45, height: 45, alt: 'Logo' }} minimized={{ src: logo, width: 30, height: 30, alt: 'logo' }}/>
				<Nav className="ml-auto" navbar>
					<SwitchLang />
				</Nav>
			</React.Fragment>
    	);
  	}
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

const mapStateToProps = (state) => {
	return {
		session: state.clientReducer.session,
		errors: state.notificationReducer.errors,
		json_lang: state.clientReducer.json_lang
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader);
