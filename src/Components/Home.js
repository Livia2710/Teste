
import Playlist_1 from '../images/Ouça_agora.png';
import Playlist_2 from '../images/Frame 2.png';
import Playlist_3 from '../images/Talvez voce goste.png';
import Play from '../images/play.png'
import Carousel from './Carousel'
import Footer from './Footer';
import './Home.css';


function Home() {

  return (

    <div className="body">

        {/* Texto de Bem-Vindo */}
        {/* <section >
          <h1 className='ben'>SEJA BEM-VINDO 
          <br/>AO
          <span> CRESCENDIA</span>
          </h1>
        </section> */}
        {/* ________________________________________________ */}

        {/* Playlists */}

        <div className="playlist">

          {/* Imagens */}
          <div className="imgs">
          <img src={Play} className='play' id='' />
            <img src={Playlist_1} alt="" />
          </div>

          <div className="imgs">
          <img src={Play} className='play' />
            <img src={Playlist_2} alt="" />
          </div>

          <div className="imgs">
          <img src={Play} className='play' />
            <img src={Playlist_3} alt="" />
        
          </div>
        </div>
        <div className="Carousel">
          <Carousel/>
        </div>

        <div className="Carousel">
          <Carousel/>
        </div>
      <Footer/> 
    </div>
 
  );

}

export default Home;
