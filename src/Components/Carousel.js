import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Assegure-se de que o caminho está correto

// Data array for the music covers and information
const musicData = [
    { id: 1, title: "Song One", artist: "Artist A", coverUrl: "https://i0.wp.com/urbanartsdecor.com/wp-content/uploads/2020/12/the-dark-side-of-the-moon-minimalista.jpg?fit=800%2C800&ssl=1" },
    { id: 2, title: "Song Two", artist: "Artist B", coverUrl: "https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" },
    { id: 3, title: "Song Three", artist: "Artist C", coverUrl: "https://alataj.com.br/wp-content/uploads/2020/04/c5a17810ae3f108960fe08c0e4e4334a.jpg" },
];

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleArrow type="next"/>, 
        prevArrow: <SampleArrow type="prev"/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {musicData.map(music => (
                <div key={music.id} className="card">
                    <img src={music.coverUrl} alt={music.title} className="cover-image"/>
                    <div className="music-info">
                        <h3>{music.title}</h3>
                        <p>{music.artist}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

function SampleArrow(props) {
    const { className, style, onClick, type } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        >
            {type === "next" ? ">" : "<"}
        </div>
    );
}

export default Carousel;
