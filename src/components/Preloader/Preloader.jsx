import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import store from '../../store/store';


var json_lang = store.getState().clientReducer.json_lang;

class PreloaderBase extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          shown: false
      };
      this.killClick = this.killClick.bind(this);
      this.handleBackdropClick = this.handleBackdropClick.bind(this);
  }

  componentDidMount() {
    /*setTimeout(function(){
      document.getElementById("close").click();
    }, 9000);*/
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
      return (
		<div className="page-loader">
			<div className="preloader pls-white">
			<svg className="pl-circular" viewBox="25 25 50 50">
				<circle className="plc-path" cx={ 50 } cy={ 50 } r={ 20 } />
			</svg>
      <p>{json_lang.common.waiting_message}</p>
			</div>
		</div>
      )
  }
}

class Preloader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            shown: false,
        };
        this.handleRenderLayer = this.handleRenderLayer.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderLayer = this.renderLayer.bind(this);
    }

    componentDidUpdate() {
        this.handleRenderLayer();
    }

    componentDidMount() {
        // Al añadir al cuerpo es más fácil que la gestión de la z-index de todo en la página.
        // También es mejor para la accesibilidad y hace un broche de presión de apilamiento (ya que los componentes se apilarán
        // Fin de montaje).
        if(!document.getElementById("preloader")){
            this._target = document.createElement('div');
            this._target.setAttribute("id", "preloader");
            document.body.appendChild(this._target);
        }else{
            this._target = document.getElementById("preloader");
        }
        this.handleRenderLayer();
    }

    handleRenderLayer() {
        // Al llamar a este método en componentDidMount () y componentDidUpdate (), usted es efectivamente
        // crear un "agujero de gusano" que canaliza cambios jerárquicos reacciona a través de un nodo DOM en una parte
        // totalmente diferente de la página.
        ReactDOM.render(this.renderLayer(), this._target);
    }

    handleClick() {
        this.props.clearError();
    }


    renderLayer() {
        if (!this.props.preloader) {
            return (<span/>);
        }
        return (
            <PreloaderBase /> 
        );
    }

    render() {
        return <span/>;
    }
}

const mapStateToProps = (state) => {
	return {
		preloader: state.notificationReducer.preloader,
    /*json_lang: state.clientReducer.json_lang*/
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Preloader);