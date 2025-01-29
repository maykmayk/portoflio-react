import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('./data/projects.json');
                const data = await response.json();
                // Raddoppia l'array dei progetti
                setProjects([...data, ...data]);
            } catch (error) {
                console.error('Errore nel caricare i progetti:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="w-100 mt-5 swiper-container">
            <Swiper
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    600: {
                        slidesPerView: 4,
                    },
                    1000: {
                        slidesPerView: 6,
                    },
                    1200: {
                        slidesPerView: 7,
                    }
                }}
                onSlideChange={(swiper) => {
                    const currentItem = swiper.realIndex;
                    const currentSlide = swiper.slides[currentItem];

                    if (currentSlide) {
                        const animatedImage = currentSlide.querySelector('.animated-image');

                        if (animatedImage) {
                            if (swiper.previousIndex > currentItem) {
                                animatedImage.style.transform = 'translateZ(-50px)';
                            } else {
                                animatedImage.style.transform = 'translateZ(50px)';
                            }
                        }
                    }
                }}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.name_id}>
                        <Link to={`/work-details/${project.name_id}`}>
                            <img
                                src="assets/images/logo_white.png"
                                alt="Mini Logo"
                                className="mini-logo"
                                loading="lazy"
                            />
                            <div className="rect">
                                <img
                                    src={project.vertical_img}
                                    alt={project.name_id}
                                    className="image animated-image"  // Assicurati che la classe sia qui
                                    loading="lazy"
                                />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;