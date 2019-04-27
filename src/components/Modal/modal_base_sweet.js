import React from 'react';

export default class ModalBaseSweet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            shown: false
        };
    }

    killClick = (e) => {
        // hace clic en el contenido no debe cerrar el modal
        e.stopPropagation();
    }

    handleBackdropClick = () => {
        this.props.onRequestCloseCansel();
    }

    handleClickTrue = () => {
        this.props.handleClickTrueSweet();
    }

    render() {
        return (
            <div className="dialog dialog--open">
                <div className="dialog__overlay" onClick={this.handleBackdropClick} />
                <div className="dialog__content min" onClick={this.killClick}>
                    <div className="dialog-header">
                        <span className="dialog-title"> {this.props.title} </span>
                        <span className="dialog-close" onClick={this.handleBackdropClick}> <i className="icon-close icons"/> </span>
                    </div>
                    <div className="dialog-body">
                        <div>
                            <button onClick={this.handleBackdropClick} className="cancel btn btn-flat">
                                {this.props.modal.cancel}
                            </button> 
                            <button onClick={this.handleClickTrue} className="confirm btn btn-warning">
                                {this.props.modal.ok}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
