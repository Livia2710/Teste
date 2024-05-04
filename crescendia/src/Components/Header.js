import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import './Header.css';

// Ícones padrões
import IconUser from '../icones/perfil.png';
import IconHome from '../icones/Vector-removebg-preview.png';
import IconPlaylist from '../icones/playlist.png';

// Ícones para o hover
import IconUserHover from '../icones/perfilV.png'; 
import IconHomeHover from '../icones/homeV.png'; 
import IconPlaylistHover from '../icones/playlistV.png'; 

const Header = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // Estados para controle das imagens de ícones
    const [iconUser, setIconUser] = useState(IconUser);
    const [iconHome, setIconHome] = useState(IconHome);
    const [iconPlaylist, setIconPlaylist] = useState(IconPlaylist);

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div style={{ width: '100%' }}>
            <nav>
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} className="Logo" />
                    </Link>
                </div>
                <div className="search">
                    <input className="pesquisa" type="search" placeholder="Buscar" />
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </div>
            </nav>
            <div className={menu_class}>
                <ul className="toggle">
                    <li>
                        <img src={iconUser} alt="" className="icone"
                             onMouseEnter={() => setIconUser(IconUserHover)}
                             onMouseLeave={() => setIconUser(IconUser)}
                        />
                        <a href="/LoginCadastro">
                            <span className="span">Perfil</span>
                        </a>
                    </li>
                    <li>
                        <img src={iconHome} alt="" className="icone"
                             onMouseEnter={() => setIconHome(IconHomeHover)}
                             onMouseLeave={() => setIconHome(IconHome)}
                        />
                        <a href="/">
                            <span className="span">Home</span>
                        </a>
                    </li>
                    <li>
                        <img src={iconPlaylist} alt="" className="icone"
                             onMouseEnter={() => setIconPlaylist(IconPlaylistHover)}
                             onMouseLeave={() => setIconPlaylist(IconPlaylist)}
                        />
                        <a href="/playlists">
                            <span className="span">Playlist</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
