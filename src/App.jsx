import { useEffect } from "react";
import { useState } from "react";
import MenuCard from "./components/menuCard/MenuCard";
import StapSection from "./components/stapsection/StapSection";
import DateCounter from "./components/dateCounter/DateCounter";
import TravelLisit from "./components/travelLisit/TravelLisit";
import Accordion from "./components/accordion/Accordion";
import Calculator from "./components/calculator/Calculator";
import EatFriend from "./components/eatAFriend/EatFriend";
import UsePopCorn from "./components/usePopCorn/UsePopCorn";
import PdfButton from "./components/PdfButton";
import TabsReact from "./components/tabsReact/TabsReact";


export default function App()  {

  // const [advices, setAdvices] = useState([]);
  // const [count, setCount] = useState(0)

  // async function getAdvices(){
  //   const res = await fetch("https://api.quotable.io/random");
  //   const data = await res.json();
  //   setAdvices(data); 
  //   setCount((c) => c + 1 )
  // }
  // console.log(advices)

  // useEffect (function () {
  //   getAdvices()
  // },[]) 

  return(
    <div id="content">
      {/* <div className="text-3xl text-center font-bold my-5">
       
          <div>{advices?.author}</div>
          <Message count={count}  />
        
      </div>
      <div className="mx-auto flex items-center">
        <button onClick={getAdvices} className="inline-flex items-center justify-center mx-auto px-5 py-1 rounded-full bg-red-500">Advices </button>
      </div> */}
      {/* <MenuCard/> */}
      {/* <StapSection/> */}
      {/* <DateCounter/> */}
      {/* <TravelLisit/> */}
      {/* <Accordion/> */}
      {/* <Calculator/> */}
      {/* <EatFriend/> */}
      
        <UsePopCorn/>
        {/* <PdfButton/> */}
        {/* <TabsReact/> */}
      
    </div>
  )

  
}

export function Message(props){
   return(
    <div>{props.count}</div>
   )
}