import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Card from "../components/Card";


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (<>
    <style jsx>{`
  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
  `}</style>
    <div className="w-full border border-red-700 " >
      
      {/* <FaArrowAltCircleLeft
        className="absolute top-1/3 left-2 text-4xl z-10 text-white cursor-pointer bg-gray-400 border border-gray-400 rounded-full drop-shadow-lg hover:text-gray-200 "
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="absolute top-1/3 right-2 text-4xl z-10 text-white border bg-gray-400 border-gray-400 rounded-full cursor-pointer drop-shadow-lg hover:text-gray-200"
        onClick={nextSlide}
      /> */}

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              // <img
              //   src={slide.image}
              //   alt="travel image"
              //   style={{
              //     width: "500px",
              //     height: "300px",
              //     borderRadius: "10px",
              //   }}
              // />
              <Card heading={slide.heading} desc={slide.desc}/>
            )}
          </div>
        );
      })}
    </div>
    </>
  );
};

export default ImageSlider;
