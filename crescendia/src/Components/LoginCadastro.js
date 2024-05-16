import React, { useState } from 'react';
import './LoginCadastro.css'

import user_icon from '../images/person.png'
import email_icon from '../images/email.png'
import password_icon from '../images/password.png'

const LoginCadastro = () => {

    const [action,setAction] = useState("Cadastro");
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"? <div></div>:<div className="input">
                    <img src={user_icon}  />
                    <input type="text"  placeholder="Nome"/>
                </div>}

                <div className="input">
                    <img src={email_icon}  />
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src={password_icon}  />
                    <input type="password" placeholder="senha" />
                </div>
            </div>
            {action==="Cadastro"?<div></div>:<div className="forgot-password">Esqueceu sua senha? <a href="/"><span>Clique Aqui</span></a></div>}
            

            <div className="submit-container">
                <div className={action==="Cadastro"?"submit gray":"submit"} onClick={() =>{setAction("Cadastro")}}>Cadastro</div>


                <div className={action==="Login"?"submit gray":"submit"}onClick={() =>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginCadastro;