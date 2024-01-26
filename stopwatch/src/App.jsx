import { useRef, useState,useEffect } from 'react'

import './App.css'

function App() {
  const [isRunning, setRunning] = useState(false);
  const [time,setTime] = useState(0);

  const intervalRef = useRef(0);
  const handleStart = () => {
    if(!isRunning) {
      setRunning(true);
      intervalRef.current = setInterval(() =>{
        setTime((prev) => prev + 1);
      },1000);
    }
  };

 const handleStop = () => {

   if(isRunning) {
    setRunning(false);
     clearInterval(intervalRef.current);
   }
 }

 const handleReset = () =>{
      setRunning(false);
      clearInterval(intervalRef.current);
      setTime(0);
 }
  const formatTime = (seconds) => {
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const hours = Math.floor(minutes / 60);
    const formattedMinutes = minutes % 60;

    return `${String(hours).padStart(2, '0')}:${String(formattedMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <>
      <div className="text-center border-red-500 w-auto h-auto bg-slate-700 rounded-xl p-10">
        <h1 className=' font-semibold'>Stopwatch</h1>
        <div className='text-4xl m-5 '>{formatTime(time)}</div>
        <div className='flex gap-5'>
         <button className='button' onClick={handleStart} disabled={isRunning} >Start</button>
         <button className='button' onClick={handleStop}  >Pause</button>
         <button className='button' onClick={handleReset} >Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
