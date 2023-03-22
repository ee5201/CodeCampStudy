import axios from 'axios'
import{useState} from 'react'

export default function RestgetPage () {
  const [title,setTitle] = useState("")



    const onCLickAsync = () => {
      const result = axios.get('https://koreanjson.com/posts/1')
      console.log( result);
    }
      // async function onclicks  ync(){ = > 원래 방식 }
    const  onCLickSyce = async() =>{
      const result = await axios.get('https://koreanjson.com/posts/1')
      console.log( result.data);
      console.log( result.data.title);
      setTitle(result.data.title)


    }
  return(
    <>

    <button onClick={onCLickAsync}>Rest-api(비동기) 요청하기</button>
    

    <button onClick={onCLickSyce}>Rest-api(동기)요청하기 </button>
    <div>{title}</div>

    </>
  )
}