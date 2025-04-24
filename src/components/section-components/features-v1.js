import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturesV1 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = this.props.customClass ? this.props.customClass :''

    return <div className={ customClass } >
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Sobre</h6>
			          <h1 className="section-title">Nosso foco</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__custom-gutter--- justify-content-center go-top">
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/21.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><a href="https://wa.me/5524999276376" target="_blank" rel="noopener noreferrer">Compre conosco</a></h3>
			            <p>Oferecemos experiências exclusivas em locação. Você merece viver com elegância e conforto</p>
			            <a href="https://wa.me/5524999276376" className="ltn__service-btn" to="/service-details">Entrar em contato <i className="flaticon-right-arrow" /></a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/22.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><a href="https://wa.me/5524999276376">Alugar</a></h3>
			            <p>Imóveis que traduzem seu estilo de vida. Encontre o espaço ideal para viver com excelência</p>
			            <a href="https://wa.me/5524999276376" className="ltn__service-btn" to="/service-details">Entrar em contato <i className="flaticon-right-arrow" /></a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/23.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><a href="https://wa.me/5524999276376" to="/service-details">Venda de imóveis</a></h3>
			            <p>Valorizamos o que você possui de mais único. Venda com discrição, agilidade e alto padrão</p>
			            <a href="https://wa.me/5524999276376" className="ltn__service-btn" to="/service-details">Entrar em contato <i className="flaticon-right-arrow" /></a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default FeaturesV1