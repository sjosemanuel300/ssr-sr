import React, { Component } from 'react';

class TableHeadRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            border: this.props.border === false ? false : true
        };
    }

    render() {
        const { border } = this.state;

        const { children } = this.props;

        let childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {
                border: border
            })
        );

        return (
            <tr>
                {childrenWithProps}
            </tr>
        );
    }
}

export default TableHeadRow;