import React, {useState, useEffect, useRef} from "react";
import Land from './Assets/land.png'
import Typewriter from 'typewriter-effect';

function App() {

  const [loading, setLoading] = useState(false)
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval = useRef()

  const startTimer = () => {
    const countDownDate = new Date('Aug 5, 2022, 00:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / (1000)) 
      if(distance < 0) { 
        clearInterval(interval.current)
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    // setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 5000)
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
  }, [])

  return (
    <div className="h-full w-full block sm:hidden">
      {
        loading ? (<div className="h-screen flex justify-center items-center"><h1 className="font-bold text-5xl text-white text-center">
          <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString('Mobi Festival 2022!')
            .callFunction(() => {
            })
            .pauseFor(1500)
            .deleteAll()
            .callFunction(() => {
            })
            .start();
          }}
      /></h1></div>) : (
        // Section 1 Start
          <div className="" style={{ backgroundImage: `url(${Land})`, WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover', backgroundSize: 'cover' , backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className="flex flex-col justify-center items-center h-screen">
              <h1 className="font-semibold text-2xl text-white">Mobi Festival 2022</h1>
              <p className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Холбоочдын баяр</p>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
