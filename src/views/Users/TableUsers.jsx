import React, { Component } from 'react';
import { Table } from '../../components';
import { connect } from 'react-redux';

class TableUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        const { sort, ord } = this.props;

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
                            this.props.table.map( (user, key) => {
                                    return (
                                        <Table.Row key={ key } item={ user.id } selected={ false } pointer={ false } border={ true }>
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
        lang: state.clientReducer.json_lang,
        table: state.clientReducer.table.dataTransactions.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TableUsers);