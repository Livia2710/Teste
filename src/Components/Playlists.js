import React from 'react'
import './Playlists.css'

const Nome = [
  {id: 1, autor: 'Mitti'}
];

const Playlists = () => {
  return (
    <div>
      <div>
        <div className='banner'>
          <h1>Sou Triste e DECADENTE</h1>
          {Nome.map((music) => (
            <p key={music.id} className='autor'>Por: {music.autor}</p>
          ))}
          <p className='numeroMusicas'></p>
        </div>
      </div>
    </div>
  )
}



export default Playlists;
