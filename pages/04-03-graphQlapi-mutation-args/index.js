import {gql,useMutation} from '@apollo/client'


const CREATE_BOARD = gql`
      mutation createBoard($writer: String, $title: String, $contents: String){ #변수의 타입 적는곳
          createBoard(writer: $writer,title: $title,contents: $contents) #실제 우리가 전달할 변수 적는 곳 
        {
          message
          _id
        }
      }
`

export default function GraphqlMutationPage () {

  const [나의함수] = useMutation(CREATE_BOARD)

  const onCLickSubmit = async() =>{
      const result = await 나의함수({
          variables: { //variables $역할을 해줌 
            writer: "훈이",
            title: "안녕하세요",
            contents: "반갑습니다."
          }
      })
      console.log(result)
      alert(result.data.createBoard.message)

  }


  return(
    <>
    <button onClick={onCLickSubmit}>
      GRAPHQL-API(동기)요청하기
    </button>
    </>
  )
}