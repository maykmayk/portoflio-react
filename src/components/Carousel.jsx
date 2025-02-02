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
        <div className='d-flex flex-column align-items-end gap-3'>
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
                        <SwiperSlide key={project.name_id} className="group relative">
                            <Link to={`/work-details/${project.name_id}`} className="block">
                                <img
                                    src="assets/images/logo_white.png"
                                    alt="Mini Logo"
                                    className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12"
                                    loading="lazy"
                                />
                                {/* miao */}
                                <div className="rect">
                                    <img
                                        src={project.vertical_img}
                                        alt={project.name_id}
                                        className="image animated-image transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="lineIntro p-0 col-12 col-md-2 text-end d-flex align-items-end justify-content-end px-3">
                <Link to="/works" className="fs-6 email hover-underline-animation">
                    See all works
                    <img
                        src="assets/images/icons/arrow-down-right.svg"
                        className="arrow"
                        alt="Arrow"
                        draggable="false"
                        loading="lazy"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Carousel;