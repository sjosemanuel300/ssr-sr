import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Select extends Component {

    constructor(props) {
        super(props);

        this.state = {
            placeholder: '',
            queryFilter: '',
            isToggled: false
        }
    }

    componentDidMount() {
        document.addEventListener('click', (event) => {
            if (this.refs.select && !this.refs.select.contains(event.target)) {
                this.close()
            }
        });

        if (this.props.value) {
            this.setState({
                placeholder: this.props.value
            })
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', (event) => {
            event.stopPropagation()
        })
    }

    toggle = (target) => {

        target.select();

        let isToggled = true;

        if (!this.props.hasFilter && this.state.isToggled) {
            isToggled = false;
        }

        this.setState({
            isToggled: isToggled
        })
    };

    close = () => {
        this.setState({
            isToggled: false
        })
    };

    onChange = (target) => {
        this.setState({
            queryFilter: target.value
        })
    };

    onSelect = (props, ...ext) => {

        const { value, children } = props;
        if (this.props.onChange) {
            this.props.onChange({ ...this.props, value: value })
        }

        this.setState({
            placeholder: children,
        });

        this.refs.queryFilter.value = '';
        this.close()
    };

    render() {
        return (
            <div className="select-wrapper" ref="select">
                <input 
                    type="text"
                    className="form-control"
                    ref="queryFilter"
                    name={ this.props.name }
                    placeholder={ this.state.placeholder || this.props.placeholder } 
                    readOnly={ !this.props.hasFilter || !this.state.isToggled } 
                    onClick={ (event) => this.toggle(event.target) } 
                    onChange={ (event) => this.onChange(event.target) }/>
                {
                    this.state.isToggled ?
                        <ul>
                            {
                                this.props.children.map( (child, key) => {
                                    return <li key={ key } onClick={ () => this.onSelect(child.props) }>{ child.props.children }</li>
                                }).filter(child => child.props.children.toString().toLowerCase().indexOf(this.state.queryFilter.toString().toLowerCase()) > -1)
                            }
                        </ul>
                        : (null)
                }
            </div>
        )
    }
}

Select.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    hasFilter: PropTypes.bool,
    onChange: PropTypes.func,
}

Select.defaultProps = {
    placeholder: 'Search...',
    value: '',
    hasFilter: false,
    onChange: () => {}
}