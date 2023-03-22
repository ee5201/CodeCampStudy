import {gql,useMutation,useQuery} from '@apollo/client'
import styled from "@emotion/styled"


const FETCH_BOARDS = gql`
query fetchBoards{
  fetchBoards{
    number
    writer
    title
    contents
  }
}
`
const DELETE_BOARD =gql`
mutation deleteBoard($number:Int){
  deleteBoard(number:$number){
    message
  }
}

`
const Row = styled.div`
display:flex;


`

const Column = styled.div`
width:20%;
color:red;

`

export default function StaticeRoutedPage() {
  const [deleteBoard] =useMutation(DELETE_BOARD)

  const {data} =  useQuery(FETCH_BOARDS)

  const DeleteBtn = async (event) =>{
    await deleteBoard({
      variables: {
        number: Number(event.target.id)
      },
      refetchQueries: [{query:FETCH_BOARDS}]
    })
  }

  return(
    <>
      {data?.fetchBoards.map((el) => (
      <Row key={el.number}>
        <Column><input type="checkbox"/></Column>
        <Column>{el.title}</Column>
        <Column>{el.number}</Column>
        <Column>{el.contents}</Column>        
        <Column><button id={el.number} onClick={DeleteBtn}>삭제</button></Column>
      </Row>
      ))}
    </>   
  )
}