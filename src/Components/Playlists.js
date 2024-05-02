import React from 'react'
import './Playlists.css'
import Banner from '../images/banner.png'

const Nome = [
  {id: 1, author: 'Mitti', title: 'Sou Triste e DECADENTE'}
];

const Playlists = () => {
  return (
    <div>
      <div>
        <div className='banner'>
          <div className='backgrouGradient'></div>
          <img src={Banner}  className='banner'/>
          {Nome.map((music) => (
            <div className='playlisInfos'>
              <h1 key={music.id}>{music.title}</h1>
              <p key={music.id} className='author'>Por: {music.author}</p>
            </div>
          ))};
          <p className='numberSongs'></p>
        </div>
      </div>
    </div>
  )
}



export default Playlists;
