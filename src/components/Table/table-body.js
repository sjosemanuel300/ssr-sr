import React, { Component } from 'react';

class TableBody extends Component {
    render() {
        return (
            <tbody>
                {this.props.children}
            </tbody>
        );
    }
}

export default TableBody;