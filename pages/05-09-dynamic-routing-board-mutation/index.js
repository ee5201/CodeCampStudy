import {gql,useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import {useState} from 'react'



const CREATE_BOARD = gql`
      mutation createBoard($writer: String, $title: String, $contents: String){ #변수의 타입 적는곳
          createBoard(writer: $writer,title: $title,contents: $contents) #실제 우리가 전달할 변수 적는 곳 
        {
          message
          _id
          number
        }
      }
`

export default function GraphqlMutationPage () {
  const router = useRouter()



  const [나의함수] = useMutation(CREATE_BOARD)
  const[writer,setWriter] = useState("")
  const[title,setitle] = useState("")
  const[contents,setContent] = useState("")

  const onCLickSubmit = async() =>{
    try{
      const result = await 나의함수({
        variables: { //variables $역할을 해줌 
          writer: writer,
          title: title,
          contents: contents
        }
    })
    console.log(result)
    alert(result.data.createBoard.message)
    console.log(result.data.createBoard.number)
    router.push(`/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`)//템플릿 리터널
    } catch(error){
      //try에 있느 내용을 시도하다가 실패하면, 아래줄 모두 무시!! 하고 CAtch가 실행됨
      console.log(error.message)
      alert(error,message)

    }
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setitle(event.target.value)

  }

  const onChangeContents = (event) => {
    setContent(event.target.value)

  }


  return(
    <>
        writer:<input onChange={onChangeWriter} type="text"/><br/>
        Title<input onChange={onChangeTitle} type="text"/><br/>
        Contents:<input onChange={onChangeContents} type="text"/><br/>
        <button onClick={onCLickSubmit}>
          GRAPHQL-API(동기)요청하기
        </button>
    </>
  )
}