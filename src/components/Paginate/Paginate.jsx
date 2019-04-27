
import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class Paginate extends Component {

    /* Operational methods */

    isFirstPage(){
        return this.props.list.meta.current_page === 1;
    }

    isLastPage(){
        return this.props.list.meta.current_page === this.props.list.meta.last_page;
    }



    /* Pagination methods */

    showPreviusLink(){
        return (
            <PaginationItem
                onClick={ () => this.props.refreshList(1) }
                disabled={ this.isFirstPage() ? true : false }
            >
                <PaginationLink previous tag="button"></PaginationLink>
            </PaginationItem>
        );
    }

    showNextLink(){
        return (
            <PaginationItem
                onClick={ () => this.props.refreshList(this.props.list.meta.last_page) }
                disabled={ this.isLastPage() ? true : false }
            >
                <PaginationLink next tag="button"></PaginationLink>
            </PaginationItem>
        );
    }

    iteratePagesLinks(){
        let linkList = [], limit = 10, n = 1;

        if(this.props.list.meta.last_page <= 10){
            limit = this.props.list.meta.last_page;
        }
 
        if(this.props.list.meta.current_page > limit){
            limit = this.props.list.meta.last_page;
            n = this.props.list.meta.current_page - 3;
        }

        for(let idx = n; idx <= limit; ++idx){
            if(this.props.list.meta.current_page !== idx)
                linkList.push(
                    <PaginationItem key={idx} onClick={ () => this.props.refreshList(idx) }>
                        <PaginationLink tag="button">{idx}</PaginationLink>
                    </PaginationItem>
                )
            else
                linkList.push(
                    <PaginationItem key={idx} onClick={ () => this.props.refreshList(idx) } className="waves-effect" active>
                        <PaginationLink tag="button">{idx}</PaginationLink>
                    </PaginationItem>
                )
        }

        return linkList;
    }

    render() {
        return (
            <Pagination>
                {this.showPreviusLink()}
                {this.iteratePagesLinks().map((page, key)=>{
                    return page;
                })}
                {this.showNextLink()}
            </Pagination>)
    }
}
