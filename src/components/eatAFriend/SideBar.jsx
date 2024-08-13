import React, { useState } from 'react'
import AddForm from './AddForm'

const FriendList = [
  {
    id: 102,
    name: "Anu Radha",
    img: "https://uxliner.com/xtreamer/demo/main/dist/img/img5.jpg",
    balance: -7,
  },
  {
    id: 102,
    name: "Floyd Miles",
    img: "https://tailwindui.com/img/avatar-2.jpg",
    balance: -7,
  },
  {
    id: 102,
    name: "Emily Selman",
    img: "https://tailwindui.com/img/avatar-3.jpg",
    balance: 10,
  },
]


const SideBar = ( {setSelectFriend}) => {
const [showAddForm, setShowAddForm] = useState(false)

const [friendList,setFriendList] = useState(FriendList)


  function handleShowFriend(){
    setShowAddForm((show) => !show)
  }
  
  function HandleSplitwork(){
    setSelectFriend((show) => !show)
  }
  



  return (
      <div className='p-10 w-1/3'>
        <div className=" divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
        {
          friendList?.map((item, index) => {
            return(
              <div className="flex items-center p-4" key={index}>
                <img src={item.img} alt="" className="h-10 w-10 flex-none rounded-full"/>
                <div className="ml-4 flex-auto">
                  <div className="font-medium">{item.name}</div>
                  <div className="mt-1 text-slate-700">@leonardkrasner {item.balance}</div>
                </div>
                <button type='button' onClick={HandleSplitwork} className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-black shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 bg-orange-500 hover:text-black duration-300">Select</button>
              </div>

            )
          })
        }
    

        {showAddForm && <AddForm setFriendList={setFriendList} />}
        <div className='p-4 flex justify-end'>
          <button className='bg-orange-500 text-black font-medium py-1 px-4 rounded-md' onClick={handleShowFriend} > {showAddForm ? "Close" :  "Add Friend" } </button>
        </div>
      </div>
      </div>
  )
}

export default SideBar
