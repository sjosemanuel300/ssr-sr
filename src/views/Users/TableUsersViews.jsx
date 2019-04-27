import React, { Component } from 'react';
import TableUsers from './TableUsers.jsx';
import { connect } from 'react-redux';
import { Paginate, SearchBar } from '../../components';
import { getTable } from '../../store/actions/userActions';


class TableUsersViews extends Component {
    constructor(props) {
        super(props);
        this.loadTransactions(1, this.props.table.sortTransactions, this.props.table.ordTransactions, this.props.table.searchTransactions);
    }

    loadTransactions = (page, sort, ord, search) => {
        var data = {
            url: `/users?page=${page}${search ? '&search=' + search : ''}&sort_by=${sort},${ord}&limit=${this.props.table.limitTransactions}`,
            sort: sort,
            ord: ord,
            page: page,
            search: search
        };
        this.props.getTable(data);
    };
 
    handlePageTransactions = (page) => {
        this.loadTransactions(page, this.props.table.sortTransactions, this.props.table.ordTransactions, this.props.table.searchTransactions);
    };

    handleSortTransactions = (sort, ord) => {
        this.loadTransactions(this.props.table.pageTransactions, sort, ord, this.props.table.searchTransactions);
    };

    handleSearchTransactions = (search) => {
        console.log(search);
        //this.loadTransactions(1, this.props.table.sortTransactions, this.props.table.ordTransactions, search);
    };

    render() {
        return (
            <div className="">
                {
                     (this.props.table.ready) ?
                         <div className="">
                             <SearchBar refreshList={ this.handleSearchTransactions } placeholder={ this.props.lang.common.search_placeholder }/>
                             <div className="table-responsive">
                                 <TableUsers { ...this.props } data={ this.props.table.dataTransactions.data } handleSort={ this.handleSortTransactions } sort={ this.props.table.sortTransactions } ord={ this.props.table.ordTransactions } />
                             </div>
                             <Paginate refreshList={ this.handlePageTransactions } list={ this.props.table.dataTransactions } />
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableUsersViews);