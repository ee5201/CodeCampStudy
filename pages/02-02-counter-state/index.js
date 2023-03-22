import {useState} from 'react'

export default function Counterstatedocumentpage(){
  const[count,setCount]= useState(0) //기존 방식 : let count =0;

  function handleClickCountUp(){
setCount(count + 1)  } // 기존방식: count += 1;

  function handleClickCountDown() {
    setCount(count - 1)
  }
  
  return(
    <div>
    <div >{count}</div>
    <button onClick={handleClickCountUp}> 버튼 올리기</button>
    <button onClick={handleClickCountDown}>카운트 내리기</button>

</div>//fragment
  )
  }