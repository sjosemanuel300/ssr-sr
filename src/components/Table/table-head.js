import React, { Component } from 'react';

class TableHead extends Component {
    render() {
        return (
            <thead>
                {this.props.children}
            </thead>
        );
    }
}

export default TableHead;