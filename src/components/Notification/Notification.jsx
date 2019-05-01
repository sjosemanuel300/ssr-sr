import React from 'react';
import ReactDOM from 'react-dom';
import './Notification.css'
import { connect } from 'react-redux';
import { clearNotification, closeNotification } from '../../store/actions/notificationsActions';

class NotificationBase extends React.Component{
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
	  let level;
	  switch(this.props.children.level){
		case 1:
			level = "info";
			break;
		case 2:
			level = "success";
			break;
		case 3:
			level = "warning";
			break;
		case 4:
			level = "error";
			break;
		default: break;
	  }
	  return (
		<div className="notification-shape shape-progress">
			<div className={`ns-box ns-other ns-show ns-${level}`}>
				<div className="ns-box-inner">
				<p>{this.props.children.message}</p>
				</div>
				<span className="ns-close" id="close" onClick={this.handleBackdropClick}/>
			</div>
		</div>
	  )
  }
}

class Notification extends React.Component{
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
		if(!document.getElementById("notification")){
			this._target = document.createElement('div');
			this._target.setAttribute("id", "notification");
			document.body.appendChild(this._target);
		}else{
			this._target = document.getElementById("notification");
		}
		this.handleRenderLayer();
	}

	static getDerivedStateFromProps (props, state) {

		if(props.notification.level !== 0) {
			if(props.notification.level > 0 && props.notification.level <= 3) {
				setTimeout ( () => {
					props.closeNotification()
				}, 2500)
			} else {
				setTimeout ( () => {
					props.closeNotification()
				}, 5000)
			}
		}

		return null;
	}

	handleRenderLayer() {
		// Al llamar a este método en componentDidMount () y componentDidUpdate (), usted es efectivamente
		// crear un "agujero de gusano" que canaliza cambios jerárquicos reacciona a través de un nodo DOM en una parte
		// totalmente diferente de la página.
		ReactDOM.render(this.renderLayer(), this._target);
	}

	handleClick() {
		this.props.clearNotification();
	}


	renderLayer() {
		if (this.props.notification.level === 0) {
			return (<span/>);
		}

		return (
			<NotificationBase onRequestClose={this.handleClick}>
				{ this.props.notification }
			</NotificationBase>
		);
	}

	render() {
		return <span/>;
	}
}

const mapStateToProps = (state) => {
	return {
		session: state.clientReducer.session,
		notification: state.notificationReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clearNotification: () => dispatch(clearNotification()),
		closeNotification: () => dispatch(closeNotification())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);