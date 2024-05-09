import React, { useRef } from 'react'
import { useState } from 'react'

import PlaylistSongs from './playlistDatabase'
import pause from '../icones/'
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
      <div><img src='' /></div>

      {/* Barra de progreção da musica */}
      <div>
        <input
          type='range'
          min='0'
          max={durantion}
          value={currentTime}
          onChange={handleSeek}
        />

        <audio ref={audioRef} src={audioSrc} />

        {/* Tempo atual e tempo total */}
        <div>
          <p>{currentTime}</p>
          <p>{durantion}</p>
        </div>

        {/* Botão de Play/Pause */}
        <button onClick={handlePlayPause}>
          <span>
            {isPlaying ? "pause" : "play"}
          </span>
        </button>
      </div>

    </div>
  )
}

export default Player