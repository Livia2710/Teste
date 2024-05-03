import React from 'react';
import PlayBox from 'components/PlayBox';
import ArtistBox from 'components/ArtistBox';

import Curtidas from '../public/Icon-curtidos.png'
import Decadente from '../public/card-playlist.png'

import Foto from '../public/card-intg1.png'
import Foto2 from '../public/card-intg2.png'
import Foto3 from '../public/card-intg3.png'
import Foto4 from '../public/card-intg4.png'
import Foto5 from '../public/card-intg5.png'
import Foto6 from '../public/card-intg6.png'

import Mix from '../public/card-mix1.png'
import Mix1 from '../public/card-mix2.png'
import Mix2 from '../public/card-mix3.png'
import Mix3 from '../public/card-mix4.png'
import Mix4 from '../public/card-mix5.png'


import { NavLink } from 'react-router-dom';
import {Icon} from 'components/Icons';
import Song from 'components/Song';


export default function Home() {


  const items =[
    {
      id: 1,
      title: 'Mix 1',
      artist: 'Eren Yalçın',
      image: Mix,
      src:'../public/card-mix1.png'
    },

    {
      id: 2,
      title: 'Mix 2',
      artist: 'Evdeki Saat',
      image: Mix1,
      src: '../public/card-mix2.png'
    },

    {
      id: 3,
      title: 'Mix 3',
      artist: 'UZI',
      image: Mix2,
      src: '../public/card-mix3.png'
    },

   {
      id: 4,
      title: 'Mix 4',
      artist: 'Duman',
      image: Mix3,
      src: '../public/card-mix4.png'
    },

    {
      id: 5,
      title: 'Mix 5',
      artist: 'Madrigal',
      image: Mix4,
      src:'../public/card-mix5.png'
    },

    
  ]


  const mixer =[
    {
      id: 1,
      position: 'Emir Can İğrek, Dolu Kadehi Ters Tut',
      name: 'Daily Mix 3',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb5b685456413fc96b946fc2f2/3/tr/default'
    },
    {
      id: 2,
      position: 'Sonny Fodera, SOMMA, Jay Pryor ve daha fazlası',
      name: 'Daily Mix 4',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe03987a142f6ba53d230a58c/4/tr/default'
    },
    {
      id: 3,
      position: 'Gazapizm, Norm Ender ve daha fazlası',
      name: 'Daily Mix 5',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb2e83342b0f36ba888c77be62/5/tr/default'
    },
    {
      id: 4,
      position: 'Şanışer, Anıl Piyancı ve daha fazlası',
      name: 'Daily Mix 6',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebcfc63410e20f29a28a05c37c/6/tr/default'
    },
    {
      id: 5,
      position: 'Serdar Ortaç, Hande Yener ve daha fazlası',
      name: 'Daily Mix 1',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebede6e2c2886ad29725a9ebf5/1/tr/default'
    }

  ]
  const singer =[
    {
      id: 1,
      position: 'Doja Cat',
      name: 'Doja Cat',
      image: 'https://i.scdn.co/image/ab6761610000517493bfdfa9be5d750ef6466886'
    },
    {
      id: 2,
      position: 'Bruno Mars',
      name: 'Bruno Mars',
      image: 'https://i.scdn.co/image/ab67616d00001e02318b9f5934c2f40343ca97c3'
    },
    {
      id: 3,
      position: 'Queen',
      name: 'Queen',
      image: 'https://i.scdn.co/image/ab676161000051748911c4deb367bd155bf475d0'
    },
    {
      id: 4,
      position: 'Sanatçı',
      name: 'Nil Karaibrahimgil',
      image: 'https://i.scdn.co/image/ab67616100005174c65a994a243b0a881a25017e'
    },
    {
      id: 5,
      position: 'Sanatçı',
      name: 'Sezen Aksu',
      image: 'https://i.scdn.co/image/ab67616100005174b624695e7b95277a7e29adb6'
    }
  ]


  return (
    <div>
      <div>
      <h3 className='text-3xl text-white font-bold tracking-tight mb-6'>Bem - Vindo!</h3>
      <div className='grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all'>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src={Curtidas} />
          <h4 className='text-[16px] font-bold p-4'>Músicas Curtidas</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src={Decadente} />
          <h4 className='text-[16px] font-bold p-4'>Sou triste e DECADENTE</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src={Foto} />
          <h4 className='text-[16px] font-bold p-4'>Gabriela Malerba</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src={Foto2} 
          />
          <h4 className='text-[16px] font-bold p-4'>Lívia Figueiredo</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src={Foto3} 
          />
          <h4 className='text-[16px] font-bold p-4'>Pedro Tanaka</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src={Foto4} />
          <h4 className='text-[16px] font-bold p-4'>Raphael Thierry</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src={Foto5} />
          <h4 className='text-[16px] font-bold p-4'>Sophia Keller</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src={Foto6} />
          <h4 className='text-[16px] font-bold p-4'>Victor Oliveira</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
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
                
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Tocados recentemente' }/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
                {mixer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Artistas'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
                {singer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4 rounded-full' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100' >
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>

    </div>
  )
}