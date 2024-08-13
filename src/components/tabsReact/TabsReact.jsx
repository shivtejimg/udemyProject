import { useState } from "react"



export default function TabsReact(){
const [isActive, setIsActive] = useState('Recent')
  return(
    <>
    <div className="max-auto max-w-7xl lg:px-8 px-6 my-5">
        <div className="flex items-center justify-center w-full md:max-w-xl  rounded shadow mx-auto">
        <button className={isActive == 'Recent' ? 'w-full flex justify-center font-medium px-5 py-2 border-t border-b bg-gray-900 text-white  border-gray-900 hover:bg-gray-800 ':'w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100'} onClick={() => setIsActive('Recent')} >
            Recent
        </button>

        <button  className={isActive == 'Popular' ? 'w-full flex justify-center font-medium px-5 py-2 border-t border-b bg-gray-900 text-white  border-gray-900 hover:bg-gray-800 ':'w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100'} onClick={() => setIsActive('Popular')}>
            Popular
        </button>

        <button  className={isActive == 'Trending' ? 'w-full flex justify-center font-medium px-5 py-2 border-t border-b bg-gray-900 text-white  border-gray-900 hover:bg-gray-800 ':'w-full flex items-center gap-x-2 justify-center font-medium rounded-r px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100'}  onClick={() => setIsActive('Trending')}>
            Trending
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z">
                </path>
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z">
                </path>
            </svg>
        </button>
     </div>

        <div className="p-3 w-full md:max-w-xl  rounded shadow-2xl mx-auto mt-5">
          <div className="tabsContent">
            <div className={isActive == 'Recent' ? 'block':'hidden'}>tabs 1 Recent1</div>
            <div className={isActive == 'Popular' ? 'block':'hidden'}> tabs 2 Popular</div>
            <div className={isActive == 'Trending' ? 'block':'hidden'}> tabs 3 Trending</div>
          </div>
        </div>

    </div>

    </>
  )
}