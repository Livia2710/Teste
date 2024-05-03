import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer'
import PlaylistSongs from './playlistDatabase';
import './Playlists.css'

import Banner from '../images/banner.png'
import Play from '../images/play.png'
import Random from '../icones/random.png'
import Edit from '../icones/edit.png'
import SaveAfter from '../icones/save.png'
import SaveBefor from '../icones/estrela.png'
import Share from '../icones/share.png'

const PlaylisInfos = [
  {id: 1, author: 'Mitsuaki', title: 'Sou Triste e DECADENTE', songs: 7}
];


  {id: 2, cover: Capa1, name: 'Only One Who Knows', author: 'Arctic Monkeys', durantion: '3:04', song: mp3_1},
  {id: 3, cover: Capa2, name: 'Glimpse of Us', author: 'Joji', durantion: '3:53', song: mp3_2},
  {id: 4, cover: Capa3, name: 'Sparks', author: 'Coldplay', durantion: '3:47', song: mp3_3},
  {id: 5, cover: Capa4, name: 'Grenade', author: 'Bruno Mars', durantion: '3:42', song: mp3_4},
  {id: 6, cover: Capa5, name: 'Rises the Moon', author: 'Liana Flores', durantion: '2:41', song: mp3_5},
  {id: 7, cover: Capa6, name: 'De 10 Mulher 11 é Maluca', author: 'Mc Saci', durantion: '1:47', song: mp3_6},
  {id: 8, cover: Capa7, name: 'Fogo Fátuo', author: 'Lupe De Lupe', durantion: '3:53', song: mp3_7},
]

const ImageSwap = () => {
  const [image, setImage] = useState(SaveBefor);

  const handleClick = () => {
    setImage(image === SaveBefor ? SaveAfter : SaveBefor);
  };

  return (
    <div>
      <img src={image} alt="Swap Image" onClick={handleClick}  className='saveButton'/>
    </div>
  );
}

const Playlists = () => {
  return (
    <div>
      
      <div className='container1'>
        {/* The Cape of playlist */}
        <div className='backgrouGradient'></div>
        <img src={Banner}  className='banner'/>
        

        {/* Informations of Playlist */}
        {PlaylisInfos.map((Playlists) => (
          <ul className='playlistFirst'>
            <li className='playlistInfo'>
              <h1 key={Playlists.id}>{Playlists.title}</h1>
              <p key={Playlists.id} className='littleInfos'>Por: {Playlists.author} • {Playlists.songs} Músicas</p>

            </li>
            <ul className='Buttons'>

              <li>
                <Link to="./player">
                <img src={Play} className='playButton'/>
                </Link>
              </li>


              <li><img src={Random} className='randomButton' /></li>
              <li><img src={Edit} className='editButton' /></li>  
            </ul>
          </ul>
          
        ))}
      </div>


      <div className='songs'>
          {PlaylistSongs.map((Song) => (
            <ul key={Song.id} className='Song'>
              <li className='cover'><img src={Song.cover} /></li>
              <li className='details'>
                <p className='name'>{Song.name}</p>
                <p className='author'>{Song.author}</p>
              </li>
              <li className='time'><p>{Song.durantion}</p></li>

              <li className='buttons'>

                <ImageSwap />

                <img src={Share} className='shareButton'/>
              </li>

            </ul>
          ))}
      </div>

      <Footer/>
      
    </div>
  )
}



export default Playlists;
