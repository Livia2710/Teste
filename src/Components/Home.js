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

import { NavLink } from 'react-router-dom';

import Footer from './Footer';
import './Home.css';



export default function Home() {

    const items =[
      {
        id: 1,
        title: 'Mix 1',
        artist: 'Eren Yalçın',
        image: Mix,
        src:'../images/card-mix1.png'
      },
  
      {
        id: 2,
        title: 'Mix 2',
        artist: 'Evdeki Saat',
        image: Mix1,
        src: '../images/card-mix2.png'
      },
  
      {
        id: 3,
        title: 'Mix 3',
        artist: 'UZI',
        image: Mix2,
        src: '../images/card-mix3.png'
      },
  
     {
        id: 4,
        title: 'Mix 4',
        artist: 'Duman',
        image: Mix3,
        src: '../images/card-mix4.png'
      },
  
      {
        id: 5,
        title: 'Mix 5',
        artist: 'Madrigal',
        image: Mix4,
        src:'../images/card-mix5.png'
      },
  
      
    ]
  return (

    <div className="body">
      
    
      <div>
        <div>
          <h3 className='text-3xl text-white font-bold tracking-tight mb-6'>Bem - Vindo!</h3>
          <div className='grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all'>
              <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
                <img className='w-[5rem] h-[5rem]' src={Curtidas} />
                <h4 className='text-[16px] font-bold p-4'>Músicas Curtidas</h4>
                <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                  {/* <Icon name="play"/> */}
                </button>
            </div>
            
            
            <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
              <img className='w-[5rem] h-[5rem]' src={Decadente} />
              <h4 className='text-[16px] font-bold p-4'>Sou triste e DECADENTE</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            </div>
            
            
            <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
              <img className='w-[5rem] h-[5rem]' src={Foto} />
              <h4 className='text-[16px] font-bold p-4'>Gabriela Malerba</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            </div>
            
            
<<<<<<< Updated upstream
            {/* <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
=======
            <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
>>>>>>> Stashed changes
              <img className='w-[5rem] h-[5rem]' src={Foto1} 
              />
              <h4 className='text-[16px] font-bold p-4'>Lívia Figueiredo</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
<<<<<<< Updated upstream
                <Icon name="play"/>
              </button>
            </div> */}
=======
                {/* <Icon name="play"/> */}
              </button>
            </div>
>>>>>>> Stashed changes
            
            
            <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
              <img className='w-[5rem] h-[5rem]' src={Foto2} 
              />
              <h4 className='text-[16px] font-bold p-4'>Pedro Tanaka</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
<<<<<<< Updated upstream
                {/* <Icon name="play"/> */}
              </button>
=======
                {/* <Icon name="play"/>  */}
              </button>
              
>>>>>>> Stashed changes
            </div>
            <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
              <img className='w-[5rem] h-[5rem]' src={Foto3} />
              <h4 className='text-[16px] font-bold p-4'>Raphael Thierry</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            </div>
            <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
              <img className='w-[5rem] h-[5rem]' src={Foto4} />
              <h4 className='text-[16px] font-bold p-4'>Sophia Keller</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            </div>
            <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
              <img className='w-[5rem] h-[5rem]' src={Foto5} />
              <h4 className='text-[16px] font-bold p-4'>Victor Oliveira</h4>
              <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                {/* <Icon name="play"/> */}
              </button>
            </div>

          </div>
        </div>
        <div className='flex justify-between items-end mb-4'>
        <PlayBox title={'Recomendações para você'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6'>
                {items.map(item => <Song item={item} key={item.id} /> )}
                
<<<<<<< Updated upstream
        </div>

   

=======
        </div>  
>>>>>>> Stashed changes
      </div>
        
        
      <Footer/> 

    </div>
    
  );

}

<<<<<<< Updated upstream
// export default Home;
=======
//export default Home;
>>>>>>> Stashed changes
