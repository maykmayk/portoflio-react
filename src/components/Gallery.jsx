// src/components/Gallery.jsx
import React from "react";

const Gallery = ({ images }) => {
    return (
        <div className="px-4 row mb-4">
            {images.map((img, index) => (
                <div key={index} className="col-12 col-md-6 mb-4">
                    <img src={img} className="galleryImg skewElem" alt={`Gallery image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;