import React, { Component } from 'react';
import { changeUserDefaultLanguage } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

class SwitchLang extends Component {
	constructor(props){
		super(props);
		this.state = {
			available_languages: [{code: "es", name: "Español"}, {code: "en", name: "English"}],
			dropdownOpen: false
		}
	}

	toggle = () =>  {
		this.setState({
		  dropdownOpen: !this.state.dropdownOpen,
		});
	}

	setLanguage = (code) => {
		this.props.changeUserDefaultLanguage(code);
	}

	render() {
	    return (
			<Dropdown className="app_lang" isOpen={this.state.dropdownOpen} toggle={() => {this.toggle();}}>
				<DropdownToggle 
				tag="span"
				onClick={this.toggle}
				data-toggle="dropdown"
				className="btn btn-dropdown"
				aria-expanded={this.state.dropdownOpen}
				>
				{
		        	this.state.available_languages.map((lang, i) => {
						return this.props.lang_code === lang.code && (<span key={ i }>{lang.name}</span>)

			        })
		        }
				<i className="fa fa-sort fa-lg"/>
				</DropdownToggle>
				<DropdownMenu>
				{
		        	this.state.available_languages.map((lang, i) => {
							return (
								<DropdownItem 
								key={i}
								onClick={() => this.setLanguage(lang.code)}>
									<i className="fa fa-language fa-lg"/>
									<span>{lang.name}</span>
								</DropdownItem>)
			        })
		        }
				</DropdownMenu>
          </Dropdown>
	    );
	}
}


const mapStateToProps = (state) => {
	return {
		lang_code: state.clientReducer.lang_code
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeUserDefaultLanguage: (lang_code) => dispatch(changeUserDefaultLanguage(lang_code))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchLang);
