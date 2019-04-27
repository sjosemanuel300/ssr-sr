import React from 'react';

export default class ModalBase extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            shown: false
        };
        this.killClick = this.killClick.bind(this);
        this.handleBackdropClick = this.handleBackdropClick.bind(this);
    }

    killClick(e) {
        // hace clic en el contenido no debe cerrar el modal
        e.stopPropagation();
    }

    handleBackdropClick() {
        // Al hacer clic en el fondo, el usuario solicita que el modal se cierra.
        // Señalar que el modal tiene nada que decir sobre si realmente se cierra. el propietario de la
        // Modal posee el estado. esto sólo "pide" que se cierre.
        this.props.onRequestClose();
    }

    render() {
        var classConten="dialog__content min",
            progress= '',
            footer = '';
        if(this.props.max === "si"){
            classConten = "dialog__content max";
            footer= this.props.footer;
        }else if(this.props.max === "med"){
            classConten="dialog__content";
        }
        
        if( this.props.progressNum !== ''){
            progress = (
                <div className="dialog_progress">
                    <span className="dialog_progress_num">{this.props.progressNum}%</span>
                    <span className="dialog_progress_tex">{this.props.progressText}</span>
                </div>
            );
        }
        return (
            <div className="dialog dialog--open">
                <div className="dialog__overlay" onClick={this.handleBackdropClick} />
                {progress}
                <div className={ classConten } onClick={this.killClick}>
                  <div className="dialog-header">
                    <span className="dialog-title"> {this.props.title} </span>
                    <span className="dialog-close" onClick={this.handleBackdropClick}> <i className="icon-close icons"></i> </span>
                  </div>
                  <div className="dialog-body">
                    {this.props.children}
                  </div>
                  {footer}
                </div>
              </div>
        )
    }
}
