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
              <li>App</li>
              <li>Desktop</li>
              <li>Mobile</li>
              
            </ul>
          </div>

          {/* colum 3*/}
          <div className='informacoes'>
            <h4>Informações</h4>
            <ul className="list-unstyled"> 
              <li>Contatos</li>
              <li>Perguntas Frequentes</li>
              <li>Termos de Serviços</li>
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