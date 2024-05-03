import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
// import Palavra from '../images/logo.png';
import './Header.css';
import IconUser from '../icones/perfil.png'
import IconHome from '../icones/home.png'
import IconPlaylist from '../icones/playlist.png'
// import IconUserHover from '../icones/perfilV.png' 
// import IconHomeHover from '../icones/homeV.png' 
// import IconPlaylistHover from '../icones/playlistV.png' 

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

                  <Link to="/">
                   <img src={Logo} className="Logo"/>
                   </Link>


                </div>

                <div className="search">

                <div>
                  <input className="pesquisa" type="search" placeholder="  Buscar"/>
                </div>

                <div className="burger-menu" onClick={updateMenu}>
               
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                </div>
            </nav>


            <div className={menu_class}>
      

        <ul className="toggle">
                <li className="borda">
                  <img src={IconUser} alt="" className="icone" />
            <a href="/LoginCadastro">
              <span id="span" className="perfil">Perfil</span>
            </a>
          </li>
          <li>
          <img src={IconHome} alt="" className="icone" />
            <a href="/">
              <span id="span">Home</span>
            </a>
          </li>
          <li>
          <img src={IconPlaylist} alt="" className="icone" />
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