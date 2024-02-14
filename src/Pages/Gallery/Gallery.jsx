import React from 'react';
import { IMAGES } from '../../data';
import { Link } from 'react-router-dom';


export const Gallery = () => {
    return (
        <div>
            {IMAGES.map((el, id) => {
                return <div>
                    <div style={{ background: el.color,width:"200px",height:"200px" }}></div>
                    <h3>{el.title}</h3>
                </div>
            })}
            <Link to='/'>
            <button>Back</button>
            </Link>
        </div>
    )
}


