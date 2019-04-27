import React, { Component } from 'react';
import TableUsers from './TableUsers.jsx';
import { connect } from 'react-redux';
import { Paginate, SearchBar } from '../../components';
import { getTable, searchData } from '../../store/actions/userActions';


class TableUsersViews extends Component {
    constructor(props) {
        super(props);
        this.props.getTable();
    }
 
    handlePageTransactions = (page) => {
        this.loadTransactions(page, this.props.table.sortTransactions, this.props.table.ordTransactions, this.props.table.searchTransactions);
    };

    handleSortTransactions = (sort, ord) => {
        this.loadTransactions(this.props.table.pageTransactions, sort, ord, this.props.table.searchTransactions);
    };

    handleSearchTransactions = (search) => {
        this.props.searchData(search);
    };

    render() {
        return (
            <div className="">
                {
                     (this.props.table.ready) ?
                         <div className="">
                             <SearchBar refreshList={ this.handleSearchTransactions }/>
                             <div className="table-responsive">
                                 <TableUsers { ...this.props } handleSort={ this.handleSortTransactions } sort={ this.props.table.sortTransactions } ord={ this.props.table.ordTransactions } />
                             </div>
                         </div>
                     :
                     <div className="page-loader">
                         <div className="preloader pls-white">
                         <svg className="pl-circular" viewBox="25 25 50 50">
                             <circle className="plc-path" cx={ 50 } cy={ 50 } r={ 20 } />
                         </svg>
                         <p>Por favor espere...</p>
                         </div>
                     </div>
                }
                
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        table: state.clientReducer.table,
        errors: state.notificationReducer.errors,
        lang: state.clientReducer.json_lang
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTable: (url) => dispatch(getTable(url)),
        searchData: (data) => dispatch(searchData(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableUsersViews);