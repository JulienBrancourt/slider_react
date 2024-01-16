import React from 'react'
import { useState } from 'react'
import leftChevron from "../../assets/left-arrow.svg"
import rightChevron from "../../assets/right-arrow.svg"
import "./Slider.css"
import sliderData from '../../data/sliderData'

export default function Slider() {

    const [index, setIndex] = useState(1)

    function change(modif) {
        let newIndex
        if (index + modif > 5) {
            newIndex = setIndex(1)
        } else if (index + modif < 1) {
            newIndex = setIndex(5)
        } else {
            newIndex = setIndex(index + modif);
        }
    }
  return (
      <>
          <p className='index-info'>{index} / {sliderData.length}</p>
          <div className="slider">
              <p className='image-info'>{sliderData.find((el) => el.id === index).description }</p>
              <img src={`/images/img-${index}.jpg`} alt="estate rooms" className="slider-img" />

              <button
                  onClick={() =>change(-1)}
                  className="navigation-button prev-button">
                  <img src={leftChevron} alt="previous image" />
              </button>
              <button
                  onClick={() =>change(1)}
                  className="navigation-button next-button">
                  <img src={rightChevron} alt=" next image" />
              </button>
          </div>
      </>
  )
}

