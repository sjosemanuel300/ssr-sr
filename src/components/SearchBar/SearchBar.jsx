import React, { Component } from 'react';
import store from '../../store/store';
import {DropdownItem, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import PropTypes from 'prop-types';
import TemplateDropdown from './TemplateDropdown.jsx';

var json_lang = store.getState().clientReducer.json_lang;


const obj = ['Attacking Midfield',
'Central Midfield',
'Centre-Back',
'Centre-Forward',
'Centre-Forward',
'Defensive Midfield',
'Keeper',
'Left Midfield',
'Left Wing',
'Left-Back',
'Right-Back']

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            searchValueNum: '',
            selectValue: ''
        }
    }

    onSearchChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            ...prevState,
            [name]: value
        });

        if (value === '') {
            this.props.refreshList(this.state);
        } else {
            this.setState({
                showRemoveIcon: true
            });
        }

        if (e.keyCode === 13) {
            this.props.refreshList(this.state);
        }
    };

    onRemoveIconClick = () => {
        this.setState({
            searchValue: '',
            searchValueNum: '',
            selectValue: ''
        });
    };

    toggleData = (data) => {
        this.setState({
            selectValue: obj[data]
        });
    }

    render() {
        return (
            <div className="content-seach">
            <InputGroup className="search">
                <Input type="text" name="searchValue" placeholder={ this.props.placeholder } onKeyUp={ (e) => this.onSearchChange(e) } />
                <div className="input-group select-group">
                    <TemplateDropdown name=''>
                        { obj.map( (templates, key) => {
                            return (<DropdownItem key={ key } onClick={ () => this.toggleData(key) } ><i className="fa fa-bell-o"/> { templates }</DropdownItem>);
                        }) }
                    </TemplateDropdown>
                </div>
                <Input type="number" name="searchValueNum" placeholder={ this.props.placeholder2 } onKeyUp={ (e) => this.onSearchChange(e) } />
                <InputGroupAddon addonType="append">
                    <Button type="button" color="link"><i className="icon-magnifier icons font-2xl"/></Button>
                    <Button type="button" color="link" onClick={this.onRemoveIconClick} >
                        <i className="icon-refresh icons font-2xl d-block"/>
                    </Button>
                </InputGroupAddon>
            </InputGroup>
            </div>
        )
    }
}

SearchBar.PropTypes = {
    placeholder: PropTypes.string
};

SearchBar.defaultProps = {
    placeholder: json_lang.common.search_placeholder
};