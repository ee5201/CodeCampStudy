import {gql} from '@apollo/client'


export const CREATE_BOARD = gql`
      mutation createBoard($writer: String, $title: String, $contents: String){ #변수의 타입 적는곳
          createBoard(writer: $writer,title: $title,contents: $contents) #실제 우리가 전달할 변수 적는 곳 
        {
          message
          number
          _id
        }
      }
`

export const UPDATE_BOARD = gql `
mutation updateBoard($number: Int , $writer: String,$title: String,$contents: String){
  updateBoard(number: $number,writer: $writer,title: $title,contents: $contents){
    _id
    number
    message
  }
}
`