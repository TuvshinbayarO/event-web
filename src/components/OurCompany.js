import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Apple from '../Assets/Chrome.png'

const OurCompany = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
      };

  return (
    <div className='text-center w-full h-full pt-10 pb-10'>
        <div className='flex justify-center items-center'>
            <div className='rounded-full w-14 p-2 bg-pink-500 text-center flex justify-center items-center'>
                <h1 className='text-4xl text-white font-bold'>06</h1>
            </div>
        </div>
        <h1 className='text-red-500 text-4xl font-bold pt-2 flex justify-center items-center text-center pb-20'>Хамтрагч байгуулга</h1>
        <Slider {...settings}>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <img alt="profile" className="w-32 rounded-full" src={Apple} />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <img alt="profile" className="w-32 rounded-full" src={Apple} />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <img alt="profile" className="w-32 rounded-full" src={Apple} />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <img alt="profile" className="w-32 rounded-full" src={Apple} />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <img alt="profile" className="w-32 rounded-full" src={Apple} />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <img alt="profile" className="w-32 rounded-full" src={Apple} />
                </div>
            </div>
        </Slider>
    </div>
  )
}

export default OurCompany