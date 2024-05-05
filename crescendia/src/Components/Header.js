import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import './Header.css';

// Ícones padrões
import IconUser from '../icones/perfil.png';
import IconHome from '../icones/home1.png';
import IconPlaylist from '../icones/playlist.png';

// Ícones para o hover
import IconUserHover from '../icones/perfilV.png'; 
import IconHomeHover from '../icones/homeV.png'; 
import IconPlaylistHover from '../icones/playlistV.png'; 

const Header = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    // Estados para controle das imagens de ícones
    const [iconUser, setIconUser] = useState(IconUser);
    const [iconHome, setIconHome] = useState(IconHome);
    const [iconPlaylist, setIconPlaylist] = useState(IconPlaylist);

    // Estado para controlar o hover e aplicar a classe correta no span
    const [hoverItem, setHoverItem] = useState(null);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <div style={{ width: '100%' }}>
            <nav>
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} className="Logo" alt="Logo" />
                    </Link>
                </div>
                <div className="search">
                    <input className="pesquisa" type="search" placeholder="  Buscar" />
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </div>
            </nav>
            <div className={menu_class}>
                <ul className="toggle">
                    <li onMouseEnter={() => setHoverItem('user')} onMouseLeave={() => setHoverItem(null)}>
                        <img src={hoverItem === 'user' ? IconUserHover : IconUser} alt="User Icon" className="icone"/>
                        <Link to="/LoginCadastro"><span className={hoverItem === 'user' ? 'span active' : 'span'}>Perfil</span></Link>
                    </li>
                    <li onMouseEnter={() => setHoverItem('home')} onMouseLeave={() => setHoverItem(null)}>
                        <img src={hoverItem === 'home' ? IconHomeHover : IconHome} alt="Home Icon" className="icone"/>
                        <Link to="/"><span className={hoverItem === 'home' ? 'span active' : 'span'}>Home</span></Link>
                    </li>
                    <li onMouseEnter={() => setHoverItem('playlist')} onMouseLeave={() => setHoverItem(null)}>
                        <img src={hoverItem === 'playlist' ? IconPlaylistHover : IconPlaylist} alt="Playlist Icon" className="icone"/>
                        <Link to="/playlists"><span className={hoverItem === 'playlist' ? 'span active' : 'span'}>Playlist</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
