
import { useState } from 'react'
import SideBar from './SideBar'
import SplitWork from './SplitWork'

const EatFriend = () => {

const [selectFriend, setSelectFriend] = useState(null)


  return (
    <div>
        <div className='mx-auto max-w-7xl lg:px-8 px-6 my-10 bg-slate-50 flex '>
          <SideBar setSelectFriend={setSelectFriend} />
          { selectFriend && <SplitWork   />}
        </div>
    </div>
  )
}

export default EatFriend
