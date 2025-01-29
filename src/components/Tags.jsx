// src/components/Tags.jsx
import React from "react";

const Tags = ({ tags }) => {
    return (
        <div className="position-relative d-flex gap-2 flex-wrap mt-3 text-center">
            {tags.map((tag, index) => (
                <div key={index} className="position-relative tagWork text-nowrap">
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default Tags;