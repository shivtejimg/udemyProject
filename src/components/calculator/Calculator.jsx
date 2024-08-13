import React, { useState } from 'react'

const Calculator = () => {
  const [bill, setBill] = useState("")
  const [parcentage1, SetParcentage1] = useState("0")
  const [parcentage2, SetParcentage2] = useState("0")
  const tip = bill * ((parcentage1 + parcentage2) / 2 / 100)

function OnHandelerRest(){
    setBill('');
    SetParcentage1(0);
    SetParcentage2(0);

}

  return (
    <div className='mx-auto max-w-3xl my-20 bg-slate-100 p-4'>
      <BillInput bill={bill} onSetBill={setBill}/>
      <SelectParcentage parcentage={parcentage1} onSelect={SetParcentage1}> How did you like the service?</SelectParcentage>
      <SelectParcentage parcentage={parcentage2} onSelect={SetParcentage2}> How did your frind the like services</SelectParcentage>

      <OutPut bill={bill} tip={tip}/>
      <Reset onReset={OnHandelerRest}/>
    </div>
  )
}

export default Calculator


function BillInput({bill, onSetBill}){
  return(
    <div>
      <label >How much was the bill ? </label>
      <input type="text" className='text-black px-2' value={bill} onChange={(e)=> onSetBill(Number(e.target.value))} />
    </div>
  )
}
function SelectParcentage({children, parcentage, onSelect}){
  return(
    <div>
      <p>{children}</p>
      <select value={parcentage} onChange={(e)=> onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="1">It was okay (5%)</option>
        <option value="2"> It was good (10%)</option>
        <option value="3">Absolutely amazing(20%)</option>
      </select>
    </div>
  )
}

function OutPut({bill, tip}){
  return(
    <div>
      <div> ${bill + tip} ${bill} </div>
    </div>
  )
}

function Reset({onReset}){
  return(
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  )

}