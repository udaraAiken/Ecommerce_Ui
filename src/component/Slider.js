import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { ApiSlides } from "../apiFolder/SliderApi";
import "./Slider.css";

const Slider = () => {
  const [slides] = useState(ApiSlides);
  const [activeSlider, setActiveSlider] = useState(0);

  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";

  const nextSlide = () => {
    if (activeSlider === slides.length - 1) {
      setActiveSlider(0);
    } else {
      setActiveSlider(activeSlider + 1);
    }
  };

  const preSlide = () => {
    if (activeSlider === 0) {
      setActiveSlider(slides.length - 1);
    } else {
      setActiveSlider(activeSlider - 1);
    }
  };

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={preSlide} />
      </div>

      {slides.map((slide, i) => {
        if (i === activeSlider) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ` +
                slide.background
              }
              key={i}
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img
                    className="h-[100%] object-cover"
                    alt=""
                    src={slide.src}
                  />
                </div>
              </div>
              <div className="des flex flex-col flex-1 place-items-start justify-center -ml-11">
                <h2 className="text-[55px]">{slide.content.h2}</h2>
                <p className="text-[30px]">{slide.content.p}</p>
                <button className="btn">Shop Now</button>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}

      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
