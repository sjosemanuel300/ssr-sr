import React, { Component } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import SwitchLang from './SwitchLang.jsx';
import logo from '../../assets/logo.png'
import { connect } from 'react-redux';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  	render() {

    	// eslint-disable-next-line
    	const { children, ...attributes } = this.props;
		var btn = '';
		var item= '';
		return (
			<React.Fragment>
				<AppNavbarBrand href="/" full={{ src: logo, width: 45, height: 45, alt: 'Logo' }} minimized={{ src: logo, width: 30, height: 30, alt: 'logo' }}/>
				{ btn }
				<Nav className="ml-auto" navbar>
					<SwitchLang />
					<AppHeaderDropdown direction="down">
						<DropdownToggle nav>
						<i className="nav-icon icon-user"/>
						
						<span className="icon-options-vertical icons span_header"></span>
						</DropdownToggle>
						<DropdownMenu right style={{ 'right': 'auto'}}>
							{item}
							<DropdownItem tag={Link} to="/user/profile" >
								<i className="icon-user icons"/>{this.props.json_lang.default_header.profile_button}
							</DropdownItem>
						</DropdownMenu>
					</AppHeaderDropdown>
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
