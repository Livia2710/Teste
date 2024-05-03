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
              <li><a href="/player"><img src={Play} className='playButton'/></a></li>
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
