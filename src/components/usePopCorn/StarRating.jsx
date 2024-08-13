import { useState } from "react"

export default function StartRating({maxRating = 5}){

  const [rating , setRating] = useState(1)
  const [tempRating , setTempRating] = useState(0)

function handleRating(rating){
  setRating(rating + 1)
  console.log(handleRating)
}

  return(
    <>
      <div className="mx-auto max-w-7xl lg:px-8 px-6">
        <div className="bg-slate-600 flex items-center justify-center p-4 mx-auto max-w-xl rounded-md my-2">
          <div className="text-white text-lg text-center font-medium"> start rating</div>
          <div className="flex items-center gap-3">
              <div className="text-orange-500 flex items-center gap-2 uppercase bg-slat">
                  {
                    Array.from({ length: maxRating}, (_, i) => (
                    <Star 
                      key={i} 
                      onRate={() => handleRating(i)} 
                      full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                      onHoverIn={() => setTempRating(i + 1)}
                      onHoverOut = { () => setTempRating(0)}
                    />
                    ))
                  }
              </div>
              <div className="font-medium text-white text-base">{tempRating || rating || ""}</div>
          </div>
        </div>
      </div>
    </>
  )
}

function Star({onRate, full, onHoverIn, onHoverOut}){
  return(
    <>

    {/* fill star  */}

    <span  
      className="flex items-center size-8 cursor-pointer" 
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      >
      {
        full ? (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>

        ) : (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"></path></svg>

        )
      }
    </span>

  
    </>


  )
}