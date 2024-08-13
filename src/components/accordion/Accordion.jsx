import React, { useState } from 'react'


const faq = [
  {
    id:1,
    question: "What is Material Tailwind?",
    answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
  },
  {
    id:2,
    question: "How to use Material Tailwind?",
    answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
  },  
  {
    id:3,
    question: "What can I do with Material Tailwind?",
    answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
  },  

]


const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div>
      <div className='mx-auto max-w-3xl  shadow-2xl rounded-md bg-slate-100 p-8 my-20'>
        <div className='text-2xl font-bold text-center text-slate-900'> Faq</div>
        
        <div className='flex flex-col gap-3'> 
          {
            faq && faq?.map((item, index)=>{
              return(
                <div className='bg-white p-3 rounded-md' key={index}>
                  <div onClick={()=>{setIsOpen(item?.id)}}>Q.{item?.id} - {item?.question} {isOpen != item?.id ? "+":"-"}</div>
                  <div className={`${isOpen == item?.id ? "block" : "hidden"}`}>{item?.answer}</div>
                </div>
              )
            })
          }

<details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
        </div>


      </div>
    </div>
  )
}

export default Accordion
