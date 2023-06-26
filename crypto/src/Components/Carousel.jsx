import React from 'react'
import './Carousel.css'
import Ione from '../Image1.png'
import Itwo from '../Image2.png'

import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

function Carousel() {
  return (
    <div className="carousel">
        <span className="blue">
            <AiOutlineArrowUp size={20}/>
        </span>
      <img src={Ione} alt="" className="img" />
      <img src={Itwo} alt="" className="img" />
      <span className="blue">
          <AiOutlineArrowDown size={20}/>
      </span>
    </div>
  );
}

export default Carousel