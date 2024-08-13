import React from 'react'

const SplitWork = () => {
  return (
    <div className='w-2/3 p-10'>
          <div className='m-3 rounded-md overflow-hidden'>
            <div className='text-3xl text-slate-800 text-center'>Split A Bill With Clark</div>
            <form>
              <div className='bg-gray-100 p-4 shadow-2xl flex flex-col gap-2'>
                <div>
                  <label className='text-sm text-slate-800 font-medium '>Bill Value</label>
                  <input type="text" className='w-full bg-white rounded-md h-10 mt-2 px-3' />
                </div>
                <div>
                  <label className='text-sm text-slate-800 font-medium '>Image Url</label>
                  <input type="text" className='w-full bg-white rounded-md h-10 mt-2 px-3' />
                </div>
                <div className='p-4 flex justify-end'>
                  <button className='bg-orange-500 text-black font-medium py-1 px-4 rounded-md'>Add Friend</button>
                </div>
              </div>
            </form>
            <div className='p-4 flex justify-end'>
                <button className='bg-orange-500 text-black font-medium py-1 px-4 rounded-md'>Close</button>
            </div>
          </div>
    </div>
  )
}

export default SplitWork
