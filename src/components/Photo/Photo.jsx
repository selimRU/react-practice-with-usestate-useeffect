import React from 'react';

const Photo = ({ photo }) => {
    const { title, thumbnailUrl } = photo;
    return (
        <div style={{border:'1px solid red',backgroundColor:'gainsboro'}}>
            <h3>Title:{title}</h3>
            <img src={thumbnailUrl} alt="" />
        </div>
    );
};

export default Photo;