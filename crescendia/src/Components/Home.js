import React from 'react';
import Curtidas from '../images/Icon-curtidos.png'
import Decadente from '../images/card-playlist.png'

import Foto from '../images/card-intg1.png'
import Foto2 from '../images/card-intg3.png'
import Foto3 from '../images/card-intg4.png'
import Foto4 from '../images/card-intg5.png'
import Foto5 from '../images/card-intg6.png'

import Mix from '../images/card-mix1.png'
import Mix1 from '../images/card-mix2.png'
import Mix2 from '../images/card-mix3.png'
import Mix3 from '../images/card-mix4.png'
import Mix4 from '../images/card-mix5.png'

import Artista1 from '../images/arctic.png'
import Artista2 from '../images/Maneskin.png'
import Artista3 from '../images/Racionais.png'
import Artista4 from '../images/System.png'
import Artista5 from '../images/Travis.png'



import Play from '../images/play.png'



import Footer from './Footer';
import './Home.css';
import Header from './Header';




function Home() {

 

    const items =[
      {
        id: 1,
        artist: 'Mix 1',
        image: Mix,
      
      },
      {
        id: 2,
        artist: 'Mix 2',
        image: Mix1,
      
      },
  
      {
        id: 3,
        artist: 'Mix 3',
        image: Mix2,
       
      },
  
     {
        id: 4,
        artist: 'Mix 4',
        image: Mix3,
      },
  
      {
        id: 5,
        artist: 'Mix 5',
        image: Mix4,
      },
  
      
    ]

    // const Artistas

    const artistas =[
      {
        id: 1,
        artist: 'Mix 1',
        image: Artista1,
      
      },
      {
        id: 2,
        artist: 'Mix 2',
        image: Artista2,
      
      },
  
      {
        id: 3,
        artist: 'Mix 3',
        image: Artista3,
       
      },
  
     {
        id: 4,
        artist: ' Mix 4',
        image: Artista4,
      },
  
      {
        id: 5,
        artist: 'Mix 5',
        image: Artista5,
      },
  
      
    ]
  return (

    

    <div className="body">

<Header/>
      
    
      <div>
        <div className='cards-playlist'>
          <h3 className='texto'>Bem-Vindo!</h3>

        
          <div className='card_playlist'>
              <div className='card'>
                <img className='img-playlist' src={Curtidas} />
                <h4 className='Nomes'>Músicas Curtidas</h4>
            </div>
            
            
            <a href="/playlists">
              <div className='card'>
                  <img className='img-playlist' src={Decadente} />
                  <h4 className='Nomes'>Sou triste e DECADENTE</h4>
              </div>
            </a>
            
            
            <div className='card'>
              <img className='img-playlist' src={Foto} />
              <h4 className='Nomes'>Gabriela Malerba</h4>
            </div>
            
         
            
            
            <div className='card'>
              <img className='img-playlist' src={Foto2}/>
              <h4 className='Nomes'>Pedro Tanaka</h4>        
            </div>

            <div className='card'>
              <img className='img-playlist' src={Foto3} />
              <h4 className='Nomes'>Raphael Thierry</h4>
            </div>

            <div className='card'>
              <img className='img-playlist' src={Foto4} />
              <h4 className='Nomes'>Sophia Keller</h4>
            </div>

            <div className='card'>
              <img className='img-playlist' src={Foto5} />
              <h4 className='Nomes'>Victor Oliveira</h4>
            </div>

            <div className='card'>
              <img className='img-playlist' src={Decadente} />
              <h4 className='Nomes'> Lívia Figueiredo</h4>
            </div>

          </div>
        </div>

          {/* Artistas */}
          <div>

          <h3 className='texto'>Tocados recentemente</h3>


            <div className='recomendacoes'>
              {artistas.map((artista) => (
                <ul key={artista.id} className='sugestoes'>
                  <li className='album'>
                    
                    <img src={Play} className='play' id='tocar'/>
                    <img src={artista.image} className='img-album' />
                  </li>
                  <li className='detalhes'>
                  <p className='mix'>{artista.artist}</p>
                  </li>
                </ul>
              ))}
            </div>

          </div>


        
        {/* Recomendações */}
        <div>

        <h3 className='texto'>Sugestões para você</h3>


           <div className='recomendacoes'>
             {items.map((item) => (
               <ul key={item.id} className='sugestoes'>
                <li className='album'>
                  
                  <img src={Play} className='play2' id='tocar'/>
                  <img src={item.image} className='img-album' />
                </li>
                <li className='detalhes'>
                <p className='mix'>{item.artist}</p>
                </li>
               </ul>
             ))}
           </div>

        </div>

   

      </div>
      <Footer/> 
    </div>
    
  );

}

export default Home;
