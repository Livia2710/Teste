import React, {useState} from "react";
import Logo from '../images/logo.png';
import Palavra from '../images/crescendia_palavra.png';
import './Header.css';
// import Playlist from '../../components/layout/playlist'

const Header = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%'}}>
            <nav>

                <div className="logo">
                   <img src={Logo} className="Logo"/>
                   <img src={Palavra} className="Palavra" />
                </div>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>

                <ul className="toggle">
                <li className="borda">
            <a href="/LoginCadastro">
              <span id="span" className="perfil">Perfil</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span id="span">Home</span>
            </a>
          </li>
          <li>
            <a href="/playlists">
              <span id="span">Playlist</span>
            </a>
          </li>
                </ul>

            </div>
        </div>
    )
}

export default Header