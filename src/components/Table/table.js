import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table className='table table-bordered'>
                {this.props.children}
            </table>
        );
    }
}

export default Table;