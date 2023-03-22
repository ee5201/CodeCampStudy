import {useMutation} from '@apollo/client'
import {ChangeEvent, useState} from 'react'
import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD,UPDATE_BOARD} from "./BoardWrite.queries"
import { useRouter } from 'next/router'
import { IBoardWriteprops, IMyvariables } from './BoardWrite.types'




export default function BoardWrite (props : IBoardWriteprops) {
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
      router.push(`/10-01-typescript-boards/${result.data.createBoard.number}`)

  }

  const onClickUpdate = async() =>{
      

      const myvariables:IMyvariables = {
        number: Number(router.query.number)
      }
      if(writer) myvariables.writer = writer
      if(title) myvariables.title = title
      if(contents) myvariables.contents = contents

      const result = await myfunction({
        variables : myvariables
      })
      alert(result.data.updateBoard.message)
      router.push(`/10-01-typescript-boards/${result.data.updateBoard.number}`)
  }

  const onChangeWriter = (event: ChangeEvent <HTMLInputElement>) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)

  }

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value)
    if(writer !== " " &&  title !== " " && contents !== " " ){
      setMycolor(false)
    }

  }

  

  return(
    <>
    {BoardWriteUI({
      onCLickSubmit: onCLickSubmit,
      onClickUpdate: onClickUpdate,
      onChangeWriter: onChangeWriter,
      onChangeTitle: onChangeTitle,
      onChangeContents: onChangeContents,
      mycolor: mycolor,
      isEdit: props.isEdit,
      data: props.data,
    })}
    </>
  )
}  