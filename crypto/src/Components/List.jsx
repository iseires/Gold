import React from 'react'
import './List.css'
function List() {
  return (
    <div className='list'>
        <ul>
            <li>New</li>
            <li>Art</li>
            <li><span className='circle'>3D</span></li>
            <li>Virtual worlds</li>
            <li>Collectibles</li>
            <li>Utility</li>
        </ul>
    </div>
  )
}

export default List