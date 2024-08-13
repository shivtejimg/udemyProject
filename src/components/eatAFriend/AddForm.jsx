import React, { useState } from 'react'

const AddForm = ( {setFriendList}) => {
const [name, setName] = useState('');
const [image, setImage] = useState('https://i.pravatar.cc/48');
const [showAddForm, setShowAddForm] = useState(true)
function HandleAddfriendList(e){
  e.preventDefault()  
  setFriendList(pre=>([...pre,{name: name, image: image}]))
  setName('')
  setImage('https://i.pravatar.cc/48')
  setShowAddForm(false)
}



  return (
    <div className='m-3 rounded-md overflow-hidden'>
      <form onSubmit={HandleAddfriendList}>
        <div className='bg-gray-100 p-4 shadow-2xl flex flex-col gap-2'>
          <div>
            <label className='text-sm text-slate-800 font-medium '>Friend Name</label>
            <input type="text" className='w-full bg-white rounded-md h-10 mt-2 px-3' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className='text-sm text-slate-800 font-medium ' value={image} onChange={(e) => setImage(e.target.value)}>Image Url</label>
            <input type="text" className='w-full bg-white rounded-md h-10 mt-2 px-3' />
          </div>
          <div className='p-4 flex justify-end'>
            <button className='bg-orange-500 text-black font-medium py-1 px-4 rounded-md'>Add Friend</button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default AddForm
