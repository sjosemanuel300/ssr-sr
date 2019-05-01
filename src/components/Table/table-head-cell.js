import React, { Component } from 'react';

class TableHeadCell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            column: this.props.column,
            sort: this.props.sort,
            ord: this.props.ord,
            color: '#363636',
            border: this.props.border
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            let { color } = this.state;

            this.setState({
                sort: nextProps.sort,
                ord: nextProps.ord,
                color: color
            });
        }
    }

    handleClick = () => {
        let { column, sort, ord } = this.state;

        if (column === sort) {
            ord = (ord === 'asc') ? 'desc' : 'asc';
        } else {
            ord = 'asc';
        }
        if (this.props.onClick) {
            this.props.onClick(column, ord);
        }
    }

    handleOver = () => {
        const { column, sort, ord } = this.state;

        if (sort) {
            if (sort === column) {
                this.setState({ color: sessionStorage.getItem('color'), ord: ord });
            } else {
                this.setState({ color: sessionStorage.getItem('color'), ord: 'asc' })
            }
        }
    }

    handleOut = () => {
        let { column, sort, color } = this.state;

        if (sort && sort === column) {
            color = sessionStorage.getItem('color');
        } else {
            color = '#363636';
        }
        this.setState({ color: color });
    }

    render() {
        const { column, sort, ord, border } = this.state;
        var color = this.state.color;

        let symbol = (ord === 'asc') ? 'rotate(180deg)' : '';
        let figure = (<i className="icon-Down"></i>);
        var have_border = border === true ? '' : 'no-border ';
        var hideOn = this.props.hideOn ? this.props.hideOn : '';
        if (sort && sort === column) {
            figure = (<i style={{ color: sessionStorage.getItem('color'), transform: symbol }} className="icon-Down"></i>);
            color = sessionStorage.getItem('color');
        }

        return (
            <th className={have_border + hideOn} style={{ color: color }} onClick={this.handleClick} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>

                <span style={color !== '#363636' ? { color: color } : { color: '' }}>{this.props.children}</span>
                <span style={{ color: color, transform: symbol }}>{figure}</span>

            </th>
        );
    }
}

export default TableHeadCell;