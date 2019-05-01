import React, { Component } from 'react';

class TableRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item,
            hover: false,
            selected: this.props.selected,
            bgColor: (this.props.selected) ? '#294C77' : '#FFFFFF',
            color: (this.props.selected) ? '#FFFFFF' : '',
            border: this.props.border === false ? false : true,
            pointer: this.props.pointer === false ? false : true,
        }
    }

    handleClick = () => {
        let { item, bgColor, selected, color } = this.state;

        selected = (!selected) ? true : false;
        bgColor = (selected) ? '#294C77' : '#FFFFFF';
        color = (selected) ? '#FFFFFF' : '';

        this.setState({
            bgColor: bgColor,
            selected: selected,
            color: color
        });

        this.props.onClick(item);
    }

    handleOver = () => {
        if (this.state.pointer) {
            const { item, selected, hover } = this.state;

            if (!hover && item && !selected) {
                this.setState({ bgColor: '#F2F8FC', hover: true });
            }
        }
    }

    handleOut = () => {
        if (this.state.pointer) {
            const { item, selected, hover } = this.state;

            if (hover && item && !selected) {
                this.setState({ bgColor: '#FFFFFF', hover: false });
            }
        }
    }

    render() {
        const { bgColor, color, border, pointer } = this.state;

        const { children } = this.props;

        let childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {
                handleClick: (this.props.onClick) ? this.handleClick : null,
                color: color,
                border: border,
                pointer: pointer
            })
        );

        return (
            <tr onMouseOver={this.handleOver} onMouseOut={this.handleOut} style={{ backgroundColor: bgColor }}>
                {childrenWithProps}
            </tr>
        );
    }
}

export default TableRow;