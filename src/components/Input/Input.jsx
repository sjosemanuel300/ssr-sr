import React, { Component, Fragment } from 'react';
import { Input as BaseInput } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Input extends Component {
    constructor (props) {
        super(props);

        this.state = {
            errors: {
                match: false
            },
            matched: null
        }
    }



    static getDerivedStateFromProps (props, state) {
        if (props.rules.match) {
            if(props.value) {
                let target = document.querySelector(`[name="${ props.rules.match }"]`);
                if(target) {
                    let match = (props.value !== target.value);

                    return {
                        errors: {
                            ...state.errors,
                            match
                        }
                    }
                }
            }
        }

        return null
    }


    notify = () => {
        let has = false;
        let target = document.querySelector(`[name="${ this.props.rules.match }"]`);
        if(target) {
            if (!this.props.value.length && !target.value.length) {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        match: false
                    }
                })
            }
        }

        Object.keys(this.state.errors).forEach( error => {
            if(this.state.errors[error]) {
                has = true;
            }
        });

        this.props.onError(has);
    };


    render () {
        return (
            <Fragment>
                <BaseInput {...this.props} onKeyUp={ () => this.notify() }/>
                {
                    Object.entries(this.state.errors).map( (error, key) => {

                        return this.state.errors[error[0]] && (
                            <span key={ key } className="text-danger">
                                {
                                    this.props.lang.custom.keystore.errors[error[0]].message + this.props.lang.custom.keystore.errors[error[0]][this.props.rules[error[0]]]
                                }
                            </span>
                        )
                    })
                }
            </Fragment>
        )
    }
}

Input.propTypes = {
    rules: PropTypes.object,
    value: PropTypes.string,
    onError: PropTypes.func
};

Input.defaultProps = {
    rules: {},
    value: '',
    onError: () => {
        return false
    }
};

const mapStateToProps = (state) => {
    return {
        lang: state.clientReducer.json_lang
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Input)