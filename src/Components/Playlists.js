import React from 'react'
import Footer from './Footer'

import './Playlists.css'

import Capa1 from '../../public/capas/only.png'
import Capa2 from '../../public/capas/glimpse.png'
import Capa3 from '../../public/capas/sparks.png'
import Capa4 from '../../public/capas/grenade.png'
import Capa5 from '../../public/capas/rises.png'
import Capa6 from '../../public/capas/de 10 mulher.png'
import Capa7 from '../../public/capas/fogo.png'

import Banner from '../images/banner.png'
import Play from '../images/play.png'
import Random from '../icones/random.png'
import Edit from '../icones/edit.png'
import Save from '../icones/save.png'
import Share from '../icones/share.png'

const PlaylisInfos = [
  {id: 1, author: 'Mitsuaki', title: 'Sou Triste e DECADENTE', songs: 7}
];

const PlaylistSongs =[

  {id: 2, cover: '../../public/capas/only.png', name: 'Only One Who Knows', author: 'Arctic Monkeys', durantion: '3:04'},
  {id: 3, cover: '', name: 'Glipse of Us', author: 'Joji', durantion: '3:53'},
  {id: 4, cover: '', name: 'Sparks', author: 'Coldplay', durantion: '3:47'},
  {id: 5, cover: '', name: 'Grenade', author: 'Bruno Mars', durantion: '3:42'},
  {id: 6, cover: '', name: 'Rises the Moon', author: 'Liana Flores', durantion: '2:41'},
  {id: 7, cover: '', name: 'De 10 Mulher 11 é Maluca', author: 'Mc Saci', durantion: '1:47'},
  {id: 8, cover: '', name: 'Fogo Fátuo', author: 'Lupe De Lupe', durantion: '3:53'},
]

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
              <li><img src={Play} className='playButton'/></li>
              <li><img src={Random} className='randomButton' /></li>
              <li><img src={Edit} className='editButton' /></li>  
            </ul>
          </ul>
          
        ))}
      </div>

      <div className='songs'>
          {PlaylistSongs.map((Song) => (
            <ul key={Song.id} className='Song'>
              <li className='cover'><img src= /*{Song.cover} /></li>
              <li className='details'>
                <p className='name'>{Song.name}</p>
                <p className='author'>{Song.author}</p>
              </li>
              <li className='time'><p>{Song.durantion}</p></li>

              <li className='buttons'>
                <img src={Save} className='saveButton'/>
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
