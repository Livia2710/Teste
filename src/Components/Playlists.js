import React from 'react'
import './Playlists.css'
import Banner from '../images/banner.png'
import Play from '../images/play.png'

const PlaylisInfos = [
  {id: 1, author: 'Mitsuaki', title: 'Sou Triste e DECADENTE', songs: 7}
];

const Playlists = () => {
  return (
    <div>
      <div>
        <div className='container'>
          {/* The Cape of playlist */}
          <div className='backgrouGradient'></div>
          <img src={Banner}  className='banner'/>

          {/* Informations of Playlist */}
          {PlaylisInfos.map((music) => (
            <ul className='playlistFirst'>
              <li className='playlistInfo'>
                <h1 key={music.id}>{music.title}</h1>
                <p key={music.id} className='littleInfos'>Por: {music.author} • {music.songs} Músicas</p>

              </li>
              <ul className='Buttons'>
                <li><img src={Play} className='playButton'/></li>
                <li><img src={Play} className='randomButton' /></li>
                <li><img src={Play} className='editButton' /></li>
              </ul>
            </ul>
            
          ))}
        </div>
      </div>
    </div>
  )
}



export default Playlists;
