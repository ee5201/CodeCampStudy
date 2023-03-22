import {useMutation} from '@apollo/client'
import {useState} from 'react'
import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD,UPDATE_BOARD} from "./BoardWrite.queries"
import { useRouter } from 'next/router'


export default function BoardWrite (props) {
  const router =useRouter();
  const [mycolor,setMycolor] =useState(true)

  const [writer,setWriter] = useState("")
  const [title,setTitle] = useState("")
  const [contents,setContents] = useState("")

  const [나의함수] = useMutation(CREATE_BOARD)

  const [myfunction] = useMutation(UPDATE_BOARD)

  const onCLickSubmit = async() =>{
      const result = await 나의함수({
          variables: { //variables $역할을 해줌 
            writer: writer,
            title: title,
            contents: contents
          }
      })
      console.log(result)
      alert(result.data.createBoard.message)
      router.push(`/08-05-board/${result.data.createBoard.number}`)

  }

  const onClickUpdate = async() =>{
      const result = await myfunction({
        variables : {
          number: Number(router.query.number),
          writer:writer,
          title:title,
          contents:contents
        }
      })
      alert(result.data.updateBoard.message)
      router.push(`/08-05-board/${result.data.updateBoard.number}`)
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)

  }

  const onChangeContents = (event) => {
    setContents(event.target.value)
    if(writer !== " " &&  title !== " " && contents !== " " ){
      setMycolor(false)
    }

  }

  

  return(
  
    <BoardWriteUI 
    onCLickSubmit={onCLickSubmit}
    onChangeWriter={onChangeWriter}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents} 
    mycolor={mycolor}
    isEdit={props.isEdit}
    onClickUpdate={onClickUpdate}/>
  )
}  