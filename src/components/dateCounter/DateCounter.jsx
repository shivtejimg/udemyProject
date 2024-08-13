import React, { useState } from 'react'

const DateCounter = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1)

    const date = new Date("27 june 2025");
    date.setDate(date.getDate() +  count);

  return (
    <>
        <div className='mx-auto max-w-7xl px-6 py-10'>
            <div className='p-4 bg-gray-100 rounded-md max-w-lg mx-auto'>
                <div className='flex items-center justify-center gap-3'>
                    <button className='text-black text-lg flex items-center justify-center size-10 rounded-md bg-gray-300' onClick={() => setCount( (c) => c - 1)}>-</button>
                    <div className=' font-medium text-black text-lg'>{` Count: ${count}`}</div>
                    <button className='text-black text-lg flex items-center justify-center size-10 rounded-md bg-gray-300' onClick={() => setCount( (c) => c + 1)}>+</button>
                </div>

                <div className='flex items-center justify-center gap-3'>
                    <button className='text-black text-lg flex items-center justify-center size-10 rounded-md bg-gray-300' onClick={() => setStep( (c) => c - 1)}>-</button>
                    <div className=' font-medium text-black text-lg'>{` step: ${step}`}</div>
                    <button className='text-black text-lg flex items-center justify-center size-10 rounded-md bg-gray-300' onClick={() => setStep( (c) => c + 1)}>+</button>
                </div>
                <div className='flex items-center justify-center text-lg text-black font-bold gap-5'>
                    <span>{ count === 0 ? "today is date"  : count > 0 ? `${count} days from today is` : `${count} days a ago was` }</span>
                    <span>{date.toDateString()}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default DateCounter
