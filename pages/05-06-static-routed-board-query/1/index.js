import {gql,useQuery} from '@apollo/client'


const FETCH_BOARD = gql`
query fetchBoard($number: Int){
  fetchBoard(number: $number){
    writer
    title
    contents
  }
}
`

export default function StaticeRoutedPage() {
  const {data} =  useQuery(FETCH_BOARD,{
    variables: {
      number: 12043
    }
  })

  console.log(data)
  return(
    <>
        <div>1번게시글페이지 이동이 완료 되었습니다.</div>
        <div>작성자:{data?.fetchBoard.writer}</div>
        <div>제목:{data?.fetchBoard.title}</div>
        <div>내용:{data?.fetchBoard.contents}</div>
        


        {/* 옵셔널체이닝ㅈ */}
    </>   
  )
}