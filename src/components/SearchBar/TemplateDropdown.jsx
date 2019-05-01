import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

class TemplateDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
          <Dropdown isOpen={this.state.dropdownOpen} toggle={() => {this.toggle();}}>
            <DropdownToggle 
            tag="span"
            onClick={this.toggle}
            data-toggle="dropdown"
            className="btn btn-dropdown"
            aria-expanded={this.state.dropdownOpen}
            >
              {this.props.name}
              <i className="fa fa-sort fa-lg"></i>
            </DropdownToggle>
            <DropdownMenu>
                {this.props.children}
            </DropdownMenu>
          </Dropdown>
    );
  }
}

export default TemplateDropdown;
