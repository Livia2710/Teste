import React from 'react';
import './Footer.css';
import Logo from '../images/logo.png';


const Footer = () => {
  return (
    <div className='main-footer'>
      <div id='container'>
        <div className='row'>

          {/* colum 1*/}
          <div className='logo'>
            <img src={Logo} alt="" className='nome' />
          </div>

          {/* colum 2*/}
          <div className='plataforma'>
            <h4>Plataformas</h4>
            <ul className="list-unstyled"> 
              <li><a href="#">App</a></li>
              <li><a href="#">Desktop</a></li>
              <li><a href="#">Mobile</a></li>
              
            </ul>
          </div>

          {/* colum 3*/}
          <div className='informacoes'>
            <h4>Informações</h4>
            <ul className="list-unstyled"> 
              <li><a href="#">Contatos</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
              <li><a href="#">Termos de Serviços</a></li>
            </ul>
          </div>

          {/* colum 4*/}
          <div className='inscricao'>
            <h4>Inscreva-se</h4>
            <ul className="list-unstyled"> 
              <li>Coloque seu e-mail para receber notificações</li>
              <input className="email" type="email" />
           
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;