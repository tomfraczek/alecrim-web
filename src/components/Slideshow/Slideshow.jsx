import React from 'react';
import Carousel from 'react-material-ui-carousel';

import Item from './Item/';

const Slideshow = () => {
    var items = [
        {
            name: "Classes",
            description: "Join our capoeira classes in central Poznan!",
            img: 'academia.jpg'
        },
        {
            name: "Music classes",
            description: "Learn to play instruments and sing capoeira songs",
            img: 'bateria.jpg'
        },
        {
            name: "Children play capoeira too",
            description: "Join our capoeira classes in central Poznan!",
            img: 'kids.jpg'
        }
    ]

    return (
        <Carousel className='main-carousel'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default Slideshow;