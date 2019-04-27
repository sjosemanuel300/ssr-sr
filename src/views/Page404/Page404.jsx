import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Page404 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">{ this.props.lang.page_404.title }</h4>
                <p className="text-muted float-left">{ this.props.lang.page_404.message }</p>
              </div>
              {
               // Object.keys(this.props.session).length > 0 ? <Link to="/generator">Ir al generador</Link> : <Link to="/login">Iniciar sesión</Link>
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.clientReducer.json_lang,
    session: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page404);
