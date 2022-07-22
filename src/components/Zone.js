import React from 'react'
import LandPhoto from '../Assets/landph.jpg'

const Zone = () => {

    const Data = [
        {
            id: 1,
            tile: 'Workshop',
            img: LandPhoto
        },
        {
            id: 2,
            tile: 'Workshop',
            img: LandPhoto
        },
        {
            id: 3,
            tile: 'Workshop',
            img: LandPhoto
        },
        {
            id: 4,
            tile: 'Workshop',
            img: LandPhoto
        },
        {
            id: 5,
            tile: 'Workshop',
            img: LandPhoto
        },
        {
            id: 6,
            tile: 'Workshop',
            img: LandPhoto
        },
    ]

  return (
    <div className='flex flex-col justify-center items-center text-center w-full h-full pt-10'>
        <div className='rounded-full w-14 p-2 bg-pink-500 text-center flex justify-center items-center'>
            <h1 className='text-4xl text-white font-bold'>02</h1>
        </div>
        <h1 className='text-red-500 text-4xl font-bold w-1/2 text-center'>Have <span className='text-white'>a nice for Weekend</span></h1>
        <p className='text-gray-400 pt-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea optio nemo adipisci laudantium assumenda cum fugiat ab voluptatibus cumque, sint soluta labore quae distinctio reprehenderit unde dolore. Veniam, sapiente.</p>
        <div className='flex flex-col justify-center items-center space-y-20 py-20 px-2'>
            {
                Data.map((item, key) => {
                    return(
                        <div key={key} className=''>
                            <div className='relative flex justify-center items-center'>
                                <img src={item.img} />
                                <div className='absolute bg-dark w-[80%] -bottom-9 rounded-xl p-5 shadow-lg'>
                                    <h1 className='text-white font-bold text-xl'>{item.tile}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Zone