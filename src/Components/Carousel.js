import React, { useState } from 'react';
import Slider from 'react-slick';
import "./Carousel.css"; 

const musicData = [
    { id: 1, title: "Song One", artist: "Artist A", coverUrl: "https://i0.wp.com/urbanartsdecor.com/wp-content/uploads/2020/12/the-dark-side-of-the-moon-minimalista.jpg?fit=800%2C800&ssl=1" },
    { id: 2, title: "Song Two", artist: "Artist B", coverUrl: "https://cdn.venngage.com/template/thumbnail/small/bf008bfe-9bf6-4511-b795-e86f070bfff5.webp" },
    { id: 3, title: "Song Three", artist: "Artist C", coverUrl: "https://alataj.com.br/wp-content/uploads/2020/04/c5a17810ae3f108960fe08c0e4e4334a.jpg" },
    { id: 4, title: "Song Four", artist: "Artist D", coverUrl: "https://assets.turbologo.com/blog/pt/2022/04/07054046/06-958x575.png" },
];

const colors = ['#ff6347', '#1e90ff', '#32cd32', '#ff1493', '#ffa500'];

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleArrow type="next" />, 
        prevArrow: <SampleArrow type="prev" />,
        afterChange: (current) => setCurrentSlide(current),
        responsive: [
            { 
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
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
        <Slider {...settings} className='container_carousel'>
            {musicData.map((music, index) => (
                <div key={music.id} className="card" style={{ backgroundColor: colors[index % colors.length] }}>
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

function SampleArrow({ className, style, onClick, type }) {
    return (
        <div
            className={`slick-arrow ${type === 'next' ? 'slick-next' : 'slick-prev'} ${className}`}
            style={{ ...style, display: "block", background: "#CD2840" }}
            onClick={onClick}
        >
            {type === "next" ? ">" : "<"}
        </div>
    );
}

export default Carousel;


