import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CallToActionV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom" >
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
			          <div className="coll-to-info text-color-white">
			            <h1>Buscando bons negócios?</h1>
			            <p>Nós podemos ajudar</p>
			          </div>
			          <div className="btn-wrapper go-top">
					  <a href="https://wa.me/5524999276376" className="btn btn-effect-3 btn-white">Entrar em contato <i className="icon-next" /></a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default CallToActionV1