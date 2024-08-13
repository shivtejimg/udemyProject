import React from 'react'

const Footer = () => {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen )
  return (
    <>
            {/* <p> we are order here </p> */}
    
      <div className='mx-auto max-w-7xl px-7 text-cemter'>
        <div className='text-lg text-black font-medium text-center order'>{isOpen && (
            <p> we are until until {closeHour}:00. Come Visit us or order online here </p>
        )
    }
    <button type='button' className='inline-flex items-center justify-center px-5 py-1 text-black text-sm bg-yellow-500 my-5 rounded-md'> Order</button>
        </div>
      </div>
    </>
  )
}

export default Footer
