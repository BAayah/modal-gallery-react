import React from 'react';
import { Link } from 'react-router-dom';


export const ModalSwitch = () => {
  return (
    <div>
      <Link to='/gallery'>
        <button>Visit the Gallery</button>
      </Link>
      <h1>Featured Images</h1>
      <Link>
        <li>Tomato</li>
      </Link>
      <Link>
        <li>Crimson</li>
      </Link>
    </div>
  )
}



