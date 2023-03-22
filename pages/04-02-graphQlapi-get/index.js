import {gql,useMutation} from '@apollo/client'

const CREATE_BOARD = gql`
      mutation{
          createBoard(writer:"cholsu",title:"title",contents:"blablabla")
        {
          message
          _id
        }
      }
`

export default function GraphqlMutationPage () {

  const [나의함수] = useMutation(CREATE_BOARD)

  const onCLickSubmit = async() =>{
      const result = await 나의함수()
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