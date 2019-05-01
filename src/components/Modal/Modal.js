import React from 'react';
import ReactDOM from 'react-dom';

import ModalBase from './modal_base';
import ModalBaseSweet from './modal_base_sweet';

export default class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            shown: false,
            progressNum: '',
            progressText: ''
        };
    }


	componentDidUpdate() {
		this.handleRenderLayer();
	}

	componentDidMount() {
		// Al añadir al cuerpo es más fácil que la gestión de la z-index de todo en la página.
		// También es mejor para la accesibilidad y hace un broche de presión de apilamiento (ya que los componentes se apilarán
		// Fin de montaje).
		if(!document.getElementById("Modal")){
			this._target = document.createElement('div');
			this._target.setAttribute("id", "Modal");
			document.body.appendChild(this._target);
		}else{
			this._target = document.getElementById("Modal");
		}
		this.handleRenderLayer();
	}

	handleRenderLayer = () => {
		// Al llamar a este método en componentDidMount () y componentDidUpdate (), usted es efectivamente
		// crear un "agujero de gusano" que canaliza cambios jerárquicos reacciona a través de un nodo DOM en una parte
		// totalmente diferente de la página.
		ReactDOM.render(this.renderLayer(), this._target);
	}

	handleClick = () => {
        this.setState({
            shown: !this.state.shown
        });
	}

	handleClickClose = () => {
        this.setState({
            shown: false
        });
	}


    renderLayer = () => {
        if (!this.state.shown) {
            return (<span/>);
        }
        if(this.props.type === 'sweet'){ 
            return (
                <ModalBaseSweet onRequestCloseCansel={this.props.onRequestCloseCansel} modal={this.props.lang} title = {this.props.name} handleClickTrueSweet = {this.props.handleClickTrue} clearData = {this.props.clearData} />
            );
        }else{
            return (
                                            // this was this.handleClick
                <ModalBase onRequestClose={this.props.onRequestCloseCansel} title = {this.props.name} footer = {this.props.footer} color = {this.props.color} max = {this.props.max} progressNum={this.state.progressNum} progressText= {this.state.progressText}>
                        {this.props.children}
                </ModalBase>
            );
        }

    }

    render() {
        // eslint-disable-next-line
        return <a href="javascript:void(0)" ref="modal_fx" role="button" onClick={this.handleClick}></a>; 
    }
}
