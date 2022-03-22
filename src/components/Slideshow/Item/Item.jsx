import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material'

const Item = ({item}) => (
    <Paper className='carousel-item--container'>
        <div className="carousel-item--content">
            <h2 className='carousel-item--element carousel-item--element__header'>{item.name}</h2>
            <p className='carousel-item--element carousel-item--element__par'>{item.description}</p>
            <Link to='/' className='carousel-button'>Read more</Link>
        </div>
        <img src={require(`./img/${item.img}`)} className='main-carousel--img' alt="" />
    </Paper>
)

export default Item;