import React, {useState, useEffect} from "react";
import Logo from './Assets/festival.png'
import Photo from './Assets/photo.jpg'
import Typewriter from "./Component/Typewriter";

function App() {

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div className="h-full w-full">
      {
        loading ? (<div className="h-screen flex justify-center items-center"><h1 className="font-bold text-5xl text-white text-center"><Typewriter text={'Weelcome Mobi Festival'} /></h1></div>) : (
          <div className="h-full">
            <div className="flex flex-col justify-center items-center h-full pt-0 sm:pt-0">
              <div className="p-5 flex flex-col justify-center items-center h-screen w-full" style={{ backgroundImage: `url(${Logo})` , backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', overflow:'hidden' }}>
                <a href="#down">
                  <h2 className=" text-[65px] font-bold sm:block hidden">
                    <span><i></i>W</span>
                    <span><i></i>e</span>
                    <span><i></i>l</span>
                    <span><i></i>c</span>
                    <span><i></i>o</span>
                    <span><i></i>m</span>
                    <span><i></i>e</span>
                    <span><i></i>•</span>
                    <span><i></i>M</span>
                    <span><i></i>o</span>
                    <span><i></i>b</span>
                    <span><i></i>i</span>
                    <span><i></i>•</span>
                    <span><i></i>F</span>
                    <span><i></i>e</span>
                    <span><i></i>s</span>
                    <span><i></i>t</span>
                    <span><i></i>i</span>
                    <span><i></i>v</span>
                    <span><i></i>a</span>
                    <span><i></i>l</span>
                  </h2>
                </a>
                <div className="block sm:hidden">
                  <a className="flex justify-center items-center" href="#down">
                    <h1 className="text-red-500 font-bold text-5xl text-center pt-96">Mobi Festival 2022</h1>
                  </a>
                </div>
              </div>
              <div className="pt-5 flex flex-col justify-center items-center">
                {/* <h1 className="text-3xl font-bold text-white cursor-pointer hover:opacity-70 transition-all duration-300">Газрын зураг</h1> */}
                <div className="pt-5 px-2">
                  <a id="down">
                    <img className="rounded-lg h-screen sm:h-full" src={Photo} alt="Map" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
