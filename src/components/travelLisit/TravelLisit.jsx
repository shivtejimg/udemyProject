import { useEffect, useState } from "react"

const initialItem = [
  {
    id: 1 ,
    description: "passport",
    quanitity: 2,
    packed: false,
  },
  {
    id: 2 ,
    description: "Beg",
    quanitity: 2,
    packed: true,
  },
  {
    id: 3 ,
    description: "mug",
    quanitity: 5,
    packed: false,
  },
  {
    id: 4 ,
    description: "oil",
    quanitity: 2,
    packed: false,
  },

]

export default function App(){
  
const [items, setItems] = useState([])
//  local storage 
useEffect(() => {
  const adding = JSON.parse(localStorage.getItem("data"))

  if (adding && adding.length > 0) {
    setItems(adding)
  }
}, [])

useEffect(()=>{
  localStorage.setItem("data", JSON.stringify(items))
},[items])

function handleAddItems (item) {
  setItems((items) => [...items, item])
}

// delet items 

function handleDeletItems (id) {
  setItems(items => items.filter(item =>item?.id !== id ))
}

// update items 

function handleUpDateItem (id) {
  setItems((items) => (
    items.map((item) => (
      item?.id === id ? {...item, packed: !item?.packed} : item
    ))
  ))
}
console.log(items)
    return(
      <div className='app'>
        <Logo/>
        <AddForm onAddItems= {handleAddItems} />
        <List items={items} onDeletItms={handleDeletItems} onToggleItem={handleUpDateItem}/>
        <Footer items={items} />
      </div>
    )
  }
 
  // header section logo

  function Logo() {
    return(
      <div className='text-3xl font-bold text-center text-black py-5 bg-gray-100'>Far Travel List</div>
    )
  }
  // header section logo end

// input section start 

function AddForm({onAddItems}) {

const [name, setName] = useState("")
const [quanitity, setQuanitity] = useState("1")


const handleAddName = (e) =>{
  setName(e)
}

const handleAddQuantity = (e) =>{
  setQuanitity(e)
}

const handleChangeValue = () => {

const newItem  = {name, quanitity, packed: false, id: Date.now()};
  console.log(newItem, "newItem here")

  onAddItems(newItem)

  setName("")
  setQuanitity("1")
  
}


    return(
      <div>
        <div className=' py-5 text-black text-3xl text-center bg-orange-400'> 

          <div className='flex items-center gap-3 justify-center'>
            <div>
              <select value={quanitity} onChange={(e) => handleAddQuantity(Number(e.target.value))} className='rounded-md bg-white text-sm px-5 py-2 text-start'>
                {Array?.from({length : 20}, (_, i) => i + 1).map(num => <option value={num} key={num}> {num} </option>)
                }
                
              </select>
            </div>
            <div><input onChange={(e) => handleAddName(e.target.value)} value={name} type="text" className='rounded-md border-0 text-sm px-5 py-2' /></div>
            <div>
              <button type="button" onClick={handleChangeValue} className='rounded-md text-sm px-5 py-2 bg-blue-800 text-white'>Add</button>
            </div>
          </div>
        </div>
      </div>
    )
  }


  // input section end 

// list section 
function List({items, onDeletItms, onToggleItem }) {


  return(
    <div className='bg-gray-100 text-black text-center py-4'>
      <ul className='flex items-center justify-center gap-7'>
          {items?.map( (item) => (
            <Item item= {item} onDeletItms={onDeletItms} onToggleItem={onToggleItem}  key={item}/>
          )) }
      </ul>
    </div>
  )
}
function Item( {item, onDeletItms, onToggleItem} ) {
  return(
    <li className='flex items-center gap-3 border border-slate-500 text-sm rounded-md p-1'>
      <span className=" flex items-center gap-1" style={item?.packed ? {textDecoration:"line-through"} : {textDecoration: "none"}}>
        <span className="flex"><input type="checkbox" checked={item?.packed} onClick={() => onToggleItem(item?.id)} /></span>
        <span>
          {item?.quanitity}
        </span>
        {item?.name}
      </span>
      <button onClick={() => onDeletItms(item?.id)}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg></button>
    </li>
  )
}

// lisit section end 

// footer section start 

function Footer({items}) {
  const [finalPer, setFinalPer] = useState();
  const newItems = items.length;
  const numPacked = items.filter((item) => item?.packed).length;
  useEffect(()=>{
    let numParcentage = Math.round( (numPacked / newItems) * 100)
    console.log(numParcentage)
    setFinalPer(numParcentage)
  },[newItems, numPacked])

  return(
  <div className='text-3xl text-black text-center mt-auto'>
      <div className=''>You have  {newItems} items on list, and you already packed {numPacked} ({finalPer}%) </div>    
  </div> 
  )
}

// footer section end 


