import React, { useRef } from 'react'
import { useState } from 'react'

import PlaylistSongs from './playlistDatabase'
import pause from '../icones/pause.png'
import play from '../images/play.png'

import './Player.css'

const Player = (audioSrc) => {
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setcurrentTime] = useState(0)
  const [durantion, setdurantion] = useState(0)

  const audioRef = useRef(0)

  // Função de selecionar um tempo especifico para tocar
  const handleSeek = (e) =>{}
  // Função de selecionar um tempo especifico para tocar
  const handlePlayPause = () =>{}
  
  return (
    <div>
      
      {/* Imagem da capa da musica */}
      {PlaylistSongs.map((Song) => (

        <div><img src={Song.cover} /></div>

      ))}

      {/* Barra de progreção da musica */}
      <div className='informations'>
        <input
          type='range'
          min='0'
          max={durantion}
          value={currentTime}
          onChange={handleSeek}
        />

        <audio ref={audioRef} src={audioSrc} />

        {/* Tempo atual e tempo total */}
        <div className='duration'>
          <p>{currentTime}</p>
          <p>{durantion}</p>
        </div>

        {/* Botão de Play/Pause */}
        <button onClick={handlePlayPause}>
          <span className='buttons'>
            {isPlaying ? <img src={pause} /> : <img src={play} />}
          </span>
        </button>
      </div>

    </div>
  )
}

export default Player