import React from 'react';
import Curtidas from '../images/Icon-curtidos.png'
import Decadente from '../images/card-playlist.png'

import Foto from '../images/card-intg1.png'
// import Foto1 from '../images/card-intg2.png'
import Foto2 from '../images/card-intg3.png'
import Foto3 from '../images/card-intg4.png'
import Foto4 from '../images/card-intg5.png'
import Foto5 from '../images/card-intg6.png'

import Mix from '../images/card-mix1.png'
import Mix1 from '../images/card-mix2.png'
import Mix2 from '../images/card-mix3.png'
import Mix3 from '../images/card-mix4.png'
import Mix4 from '../images/card-mix5.png'

import Play from '../images/play.png'



import Footer from './Footer';
import './Home.css';


function Home() {

    const items =[
      {
        id: 1,
        title: 'Mix 1',
        artist: 'Eren Yalçın',
        image: Mix,
      
      },
      {
        id: 2,
        title: 'Mix 2',
        artist: 'Evdeki Saat',
        image: Mix1,
      
      },
  
      {
        id: 3,
        title: 'Mix 3',
        artist: 'UZI',
        image: Mix2,
       
      },
  
     {
        id: 4,
        title: 'Mix 4',
        artist: 'Duman',
        image: Mix3,
      },
  
      {
        id: 5,
        title: 'Mix 5',
        artist: 'Madrigal',
        image: Mix4,
      },
  
      
    ]
  return (

    <div className="body">
      
    
      <div>
        <div className='cards-playlist'>
          <h3 className='texto'>Bem-Vindo!</h3>

        
          <div className='card_playlist'>
              <div className='card'>
                <img className='img-playlist' src={Curtidas} />
                <h4 className='Nomes'>Músicas Curtidas</h4>
                <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                  {/* <Icon name="play"/> */}
                </button>
            </div>
            
            
            <div className='card'>
              <img className='img-playlist' src={Decadente} />
              <h4 className='Nomes'>Sou triste e DECADENTE</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            </div>
            
            
            <div className='card'>
              <img className='img-playlist' src={Foto} />
              <h4 className='Nomes'>Gabriela Malerba</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            </div>
            
         
            
            
            <div className='card'>
              <img className='img-playlist' src={Foto2}/>
              <h4 className='Nomes'>Pedro Tanaka</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            
              
            </div>
            <div className='card'>
              <img className='img-playlist' src={Foto3} />
              <h4 className='Nomes'>Raphael Thierry</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            </div>
            <div className='card'>
              <img className='img-playlist' src={Foto4} />
              <h4 className='Nomes'>Sophia Keller</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            </div>
            <div className='card'>
              <img className='img-playlist' src={Foto5} />
              <h4 className='Nomes'>Victor Oliveira</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            </div>

            <div className='card'>
              <img className='img-playlist' src={Decadente} />
              <h4 className='Nomes'> Lívia Figueiredo</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            </div>

          </div>
        </div>


        
        {/* Recomendações */}
        <div>

        <h3 className='texto'>Sugestões para você</h3>


           <div className='recomendacoes'>
             {items.map((item) => (
               <ul key={item.id} className='sugestoes'>
                 <li className='detalhes'>
                <p className='mix'>{item.title}</p>
                </li>
                <li className='album'>
                  
                  <img src={Play} className='play'/>
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
