import React, { Component } from 'react';

class TableCell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: this.props.disabled,
            width: this.props.width,
            color: this.props.color,
            background: (this.props.background) ? this.props.background : '',
            border: this.props.border,
            pointer: this.props.pointer
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.color !== this.state.color) {
            this.setState({
                color: nextProps.color
            });
        }
    }

    render() {
        const { disabled, width, color, background, border, pointer } = this.state;

        let td;

        var have_pointer = pointer === true ? 'hover-td ' : '';
        var have_border = border === true ? '' : 'no-border ';
        var hideOn = this.props.hideOn ? this.props.hideOn : '';
        if (disabled) {
            if (width)
                td = (<td className={have_pointer + have_border + hideOn} style={{ width: width, color: color, background: background }}>{this.props.children}</td>);
            else
                td = (<td className={have_pointer + have_border + hideOn} style={{ color: color, background: background }}>{this.props.children}</td>);
        } else {
            if (width)
                td = (<td className={have_pointer + have_border + hideOn} style={{ width: width, color: color, background: background }} onClick={this.props.handleClick}>{this.props.children}</td>);
            else
                td = (<td className={have_pointer + have_border + hideOn} style={{ color: color, background: background }} onClick={this.props.handleClick}>{this.props.children}</td>);
        }

        return td;
    }
}

export default TableCell;