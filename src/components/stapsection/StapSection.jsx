import React, { useState } from 'react'

const message = [
    "Learn React *",
    "Apply For Jobs",
    "invest your new income",
    

]

const StapSection = () => {

    const [count,setCount] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

    const step = count ;
    function handlePrev () {
        console.log(` ${handlePrev} preclick`);
        // alert("Prev")
        if(count > 1){
            setCount(count - 1)
        }
    }
    function handleNext () {
        console.log(` ${handlePrev} prenext`);
        // alert("Next")
        if (count < message.length) {
            setCount(count + 1)
        }
    }
  return (
    <>
      <div className='mx-auto max-w-7xl px-6 relative  py-10'>
        <div className='flex items-center justify-end'>
          <button className='*size-10' onClick={() => setIsOpen(!isOpen)}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"></path></svg>
          </button>
        </div>
        { isOpen &&(

        <div className='bg-gray-100 max-w-lg mx-auto rounded my-5 p-5 staps'>
            <div className='flex items-center justify-between *:size-10 *:rounded-full *:bg-gray-300 *:text-sm *:text-black *:flex *:items-center *:justify-center *:font-medium message '>
                <div className={`${step >= 1 ? "active [&.active]:bg-blue-600 [&.active]:text-white" : ""}`}>1</div>
                <div className={`${step >= 2 ? "active [&.active]:bg-blue-600 [&.active]:text-white" : ""}`}>2</div>
                <div className={`${step >= 3 ? "active [&.active]:bg-blue-600 [&.active]:text-white" : ""}`}>3</div>
            </div>
            <div className='message py-5 text-black font-medium text-base text-center'> Step : {step} {message [step - 1]}  </div>
            <div className='button flex items-center justify-around'>
            <button className={`flex items-center justify-center px-5 py-1 text-white text-sm bg-blue-600 rounded-full ${step === 1 ? "hidden" : "block"} `} onClick={handlePrev}>PREV</button>
            <button className={`flex items-center justify-center px-5 py-1 text-white text-sm bg-blue-600 rounded-full ${step === 3 ? "hidden" : "block"}`}  onClick={handleNext}>NEXT</button>


            </div>
        </div>
        )}
      </div>
    </>
  )
}

export default StapSection
