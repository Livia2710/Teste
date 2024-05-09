import React from 'react'
import { useState } from 'react'

import musicInfo from './playlistDatabase'

import Play from '../images/play.png'
import Random from '../icones/random.png'

function Player() {

  const[songs, setSongs] = useState()

  return (
    <div>
      {musicInfo.map((Song) => (
          <section>
            <div>
              <h2>{Song.name}</h2>
              <img src={Song.cover} alt="" />
            </div>

            <div>
              {/* Barra com o tempo da musica aq */}
              <div></div>
              <ul>
                {/* <li><a href=""><img src={} alt="" /></a></li>
                <li><a href=""><img src={} alt="" /></a></li>
                <li><a href=""><img src={Play}alt="" /></a></li>
                <li><a href=""><img src={} alt="" /></a></li>
                <li><a href=""><img src={Random} alt="" /></a></li> */}
              </ul>
            </div>
          </section>
        )
      )}
    </div>
  )
}

export default Player