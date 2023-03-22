import {useMutation} from '@apollo/client'
import {useState} from 'react'
import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD} from "./BoardWrite.queries"


export default function BoardWrite () {
  const [writer,setWriter] = useState("")
  const [title,setTitle] = useState("")
  const [contents,setContents] = useState("")

  const [나의함수] = useMutation(CREATE_BOARD)

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

  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)

  }

  const onChangeContents = (event) => {
    setContents(event.target.value)

  }

  return(
    <>
    <BoardWriteUI 
    onCLickSubmit={onCLickSubmit}
    onChangeWriter={onChangeWriter}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}>

    </BoardWriteUI>
    </>
  )
}  