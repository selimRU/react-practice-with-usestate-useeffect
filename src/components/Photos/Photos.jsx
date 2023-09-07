import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';

const Photos = () => {
    const [photos, setPhotos] = useState([])
    const styleContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyContent: 'space-between',
        alignItem: 'center',
        gap:'10px'

    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => {
                const photos = data.slice(0, 99)
                // console.log(photos);
                setPhotos(photos)
            })


    }, [])
    return (
        <div style={styleContainer}>
            {
                photos.map(photo => <Photo
                    key={photo.id}
                    photo={photo}
                ></Photo>)
            }
        </div>
    );
};

export default Photos;