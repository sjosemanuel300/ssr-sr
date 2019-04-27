import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../../components';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class TableUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: null,
            data: this.props.data,
            sort: this.props.sort,
            ord: this.props.ord,
            selectedItems: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            data: props.data,
            sort: props.sort,
            ord: props.ord
        }
    }

    handleSort = (sort, ord) => {
        this.props.handleSort(sort, ord);
    };

    render() {
        const { data, sort, ord } = this.state;

        if (!data) {
            return (<div />)
        }

        if (data.length < 1) // if the search returns no results
        {
            return (<div className="not-content padding"> { this.props.lang.common.no_results } </div>);
        }

        return (
            <div className="torg">
                <Table>
                    <Table.Head>
                        <Table.HeadRow border={ true }>
                            <Table.HeadCell column='name' sort={ sort } ord={ ord } onClick={ this.handleSort }>
                                { this.props.lang.tableUsers.first_name }
                            </Table.HeadCell>
                            <Table.HeadCell column='position' sort={ sort } ord={ ord } onClick={ this.handleSort }>
                                { this.props.lang.tableUsers.email }
                            </Table.HeadCell>
                            <Table.HeadCell column='team' sort={ sort } ord={ ord } onClick={ this.handleSort }>
                                { this.props.lang.tableUsers.email }
                            </Table.HeadCell>
                            <Table.HeadCell column='age' sort={ sort } ord={ ord } onClick={ this.handleSort }>
                                { this.props.lang.tableUsers.last_name }
                            </Table.HeadCell>
                        </Table.HeadRow>
                    </Table.Head>
                    <Table.Body>
                        {
                            data.map( (user) => {
                                return (
                                    <Table.Row key={ user.id } item={ user.id } selected={ false } pointer={ false } border={ true }>
                                        <Table.Cell width="25%"> { user.name } </Table.Cell>
                                        <Table.Cell width="25%"> { user.position } </Table.Cell>
                                        <Table.Cell width="25%"> { user.team } </Table.Cell>
                                        <Table.Cell width="25%"> { user.age } </Table.Cell>
                                    </Table.Row>
                                );
                            })
                        }
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.clientReducer.json_lang
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TableUsers);