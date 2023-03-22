export default function Counterletdocumentpage(){


  function handleClickCountUp(){
   const count = Number(document.getElementById("count").innerText)+1

   document.getElementById("count").innerText = count
  }


  function handleClickCountDown() {
    const count = Number(document.getElementById("count").innerText)-1

   document.getElementById("count").innerText = count
  }


return(
  <div>
      <div id="count">0</div>
      <button onClick={handleClickCountUp}> 버튼 올리기</button>
      <button onClick={handleClickCountDown}>카운트 내리기</button>

  </div>//fragment
 
)

}