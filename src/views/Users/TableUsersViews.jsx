import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchBar } from '../../components';
import { Table } from '../../components';
import { getTable } from '../../store/actions/userActions';
import { getTableState } from '../../store/selectors/table';
import { getLangState } from '../../store/selectors/jsonLang';

class TableUsersViews extends Component {
    constructor(props) {
        super(props);
        this.props.getTable();
    }

    render() {
        return (
            <div>
                <h1 className="f-21">{ this.props.lang.tableUsers.title }</h1>
                <SearchBar/>
                <div className="table-responsive">
                    <Table>
                        <Table.Head>
                            <Table.HeadRow border={ true }>
                                <Table.HeadCell column='name'>
                                    { this.props.lang.tableUsers.first_name }
                                </Table.HeadCell>
                                <Table.HeadCell column='position'>
                                    { this.props.lang.tableUsers.position }
                                </Table.HeadCell>
                                <Table.HeadCell column='team'>
                                    { this.props.lang.tableUsers.team }
                                </Table.HeadCell>
                                <Table.HeadCell column='age'>
                                    { this.props.lang.tableUsers.age }
                                </Table.HeadCell>
                            </Table.HeadRow>
                        </Table.Head>
                        <Table.Body>
                            {
                                this.props.table.map( (user, key) => {
                                        return (
                                            <Table.Row key={ key } item={ key } selected={ false } pointer={ false } border={ true }>
                                                <Table.Cell width="25%"> <span className="player"> { user.name } </span> </Table.Cell>
                                                <Table.Cell width="25%"> { user.position } </Table.Cell>
                                                <Table.Cell width="25%"> { user.nationality } </Table.Cell>
                                                <Table.Cell width="25%"> { user.age } </Table.Cell>
                                            </Table.Row>
                                        );
                                })
                            }
                        </Table.Body>
                    </Table>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        table: getTableState( state ),
        lang: getLangState(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTable: (url) => dispatch(getTable(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableUsersViews);