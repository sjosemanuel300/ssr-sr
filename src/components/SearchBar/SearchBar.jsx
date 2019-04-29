import React, { Component } from 'react';
import {DropdownItem, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import TemplateDropdown from './TemplateDropdown.jsx';
import { connect } from 'react-redux';
import { getTable, searchData } from '../../store/actions/userActions';
import { getLangState } from '../../store/selectors/jsonLang';

const obj = [
    'Attacking Midfield',
    'Central Midfield',
    'Centre-Back',
    'Centre-Forward',
    'Centre-Forward',
    'Defensive Midfield',
    'Keeper',
    'Left Midfield',
    'Left Wing',
    'Left-Back',
    'Right-Back'
]

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            searchValueNum: '',
            selectValue: '',
        }
    }

    onSearchChange = (e) => {
        const {name, value} = e.target;
        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }));

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
        this.props.getTable();
    };

    toggleData = (data) => {
        this.setState({
            selectValue: obj[data]
        });
    }

    render() {
        var json_lang = this.props.lang;
        return (
            <div className="content-seach">
            <InputGroup className="search">
                <Input type="text" name="searchValue" value={this.state.searchValue} placeholder={ json_lang.tableUsers.first_name } onChange={ (e) => this.onSearchChange(e) } />
                <div className="input-group select-group">
                    <TemplateDropdown name={this.state.selectValue === '' ? json_lang.tableUsers.position : this.state.selectValue }>
                        { obj.map( (templates, key) => {
                            return (<DropdownItem key={ key } onClick={ () => this.toggleData(key) } ><i className="fa fa-bell-o"/> { templates }</DropdownItem>);
                        }) }
                    </TemplateDropdown>
                </div>
                <Input type="number" name="searchValueNum" value={this.state.searchValueNum} placeholder={ json_lang.tableUsers.age } onChange={ (e) => this.onSearchChange(e) } />
                <InputGroupAddon addonType="append">
                    <Button type="button" color="link" onClick={ () =>  this.props.searchData(this.state) }><i className="icon-magnifier icons font-2xl"/></Button>
                    <Button type="button" color="link" onClick={ () => this.onRemoveIconClick() } >
                        <i className="icon-refresh icons font-2xl d-block"/>
                    </Button>
                </InputGroupAddon>
            </InputGroup>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        lang: getLangState(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTable: (url) => dispatch(getTable(url)),
        searchData: (data) => dispatch(searchData(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);