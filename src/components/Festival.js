import React, {useState, useCallback} from 'react'
import LandPhoto from '../Assets/photo.jpg'
import {FaMapMarkerAlt, FaClock} from 'react-icons/fa'
import ImageViewer from 'react-simple-image-viewer';

const Festival = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [showMore, setShowMore] = useState(false)

    console.log('showmore', showMore)

    const images = [
        LandPhoto,
        LandPhoto,
        LandPhoto,
        LandPhoto,
        LandPhoto,
        LandPhoto,
    ];

    const Data = [
        {
            id: 1,
            tag: '5',
            subTag : 'Aug',
            img: 'http://placeimg.com/800/1200/nature',
            title: 'Leadership digital',
            subTitle: 'Rometheme',
            location: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaMapMarkerAlt /> 99th, Qelilink Street</div>,
            time: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaClock /> 09:30Am - 10:30Am</div>
        },
        {
            id: 2,
            tag: '5',
            subTag : 'Aug',
            img: 'http://placeimg.com/800/1200/nature',
            title: 'Leadership digital',
            subTitle: 'Rometheme',
            location: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaMapMarkerAlt /> 99th, Qelilink Street</div>,
            time: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaClock /> 09:30Am - 10:30Am</div>
        },
        {
            id: 3,
            tag: '5',
            subTag : 'Aug',
            img: 'http://placeimg.com/800/1200/nature',
            title: 'Leadership digital',
            subTitle: 'Rometheme',
            location: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaMapMarkerAlt /> 99th, Qelilink Street</div>,
            time: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaClock /> 09:30Am - 10:30Am</div>
        },{
            id: 4,
            tag: '5',
            subTag : 'Aug',
            img: 'http://placeimg.com/800/1200/nature',
            title: 'Leadership digital',
            subTitle: 'Rometheme',
            location: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaMapMarkerAlt /> 99th, Qelilink Street</div>,
            time: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaClock /> 09:30Am - 10:30Am</div>
        }
        ,{
            id: 5,
            tag: '5',
            subTag : 'Aug',
            img: 'http://placeimg.com/800/1200/nature',
            title: 'Leadership digital',
            subTitle: 'Rometheme',
            location: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaMapMarkerAlt /> 99th, Qelilink Street</div>,
            time: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaClock /> 09:30Am - 10:30Am</div>
        }
        ,{
            id: 6,
            tag: '5',
            subTag : 'Aug',
            img: 'http://placeimg.com/800/1200/nature',
            title: 'Leadership digital',
            subTitle: 'Rometheme',
            location: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaMapMarkerAlt /> 99th, Qelilink Street</div>,
            time: <div className='text-gray-400 font-semibold flex justify-center items-center pt-5'><FaClock /> 09:30Am - 10:30Am</div>
        }
    ]

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);
    
      const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
      };

return (
    <div className='flex flex-col justify-center items-center text-center w-full h-full pt-10 pb-10'>
        <div className='rounded-full w-14 p-2 bg-pink-500 text-center flex justify-center items-center'>
            <h1 className='text-4xl text-white font-bold'>03</h1>
        </div>
        <h1 className='text-red-500 text-4xl font-bold w-1/2 text-center'>Have <span className='text-white'>a nice for Weekend</span></h1>
        <p className='text-gray-400 pt-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        {
           showMore ? Data.map((item, idx) => {
                return(
                     <div key={idx} className='w-full flex flex-col justify-center items-center pt-14'>
                        <div className='bg-red-500 w-[80%] rounded-lg'>
                            <div className='flex flex-col justify-center items-center text-white font-bold text-2xl'>
                                <h1>{item.tag}</h1>
                                <p>{item.subTag}</p>
                            </div>                
                        </div>
                        <img onClick={() => openImageViewer(idx)} alt='festival' className='py-5 w-52 cursor-pointer' src={item.img} />
                        <h1 className='text-white font-bold text-4xl'>{item.title}</h1>
                        <p className='text-gray-400 font-semibold'>{item.subTitle}</p>
                        {item.location}
                        {item.time}
                    </div> 
                )
            }) : Data.map((item, idx) => {
                return idx <= 2 && <div key={idx} className='w-full flex flex-col justify-center items-center pt-14'>
                <div className='bg-red-500 w-[80%] rounded-lg'>
                    <div className='flex flex-col justify-center items-center text-white font-bold text-2xl'>
                        <h1>{item.tag}</h1>
                        <p>{item.subTag}</p>
                    </div>                
                </div>
                <img onClick={() => openImageViewer(idx)} alt='Festival' className='py-5 w-52 cursor-pointer' src={item.img} />
                <h1 className='text-white font-bold text-4xl'>{item.title}</h1>
                <p className='text-gray-400 font-semibold'>{item.subTitle}</p>
                {item.location}
                {item.time}
            </div>
            })
        }

        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5' onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>

        {isViewerOpen && (
            <ImageViewer
                src={images}
                currentIndex={currentImage}
                onClose={closeImageViewer}
                disableScroll={false}
                backgroundStyle={{
                    backgroundColor: "rgba(0,0,0,0.9)"
                }}
                closeOnClickOutside={true}
            />
        )}
    </div>
  )
}

export default Festival