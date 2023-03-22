import {RedInput,BlueButton} from './BoardWrite.styles'

export default function BoardWriteUI (props ) {

  return(
    <>
    writer:<RedInput onChange={props.bbb} type="text"/><br/>
        Title<input onChange={props.onChangeTitle} type="text"/><br/>
        Contents:<input onChange={props.onChangeContents} type="text"/><br/>
        <BlueButton onClick={props.onCLickSubmit}>
          GRAPHQL-API(동기)요청하기
        </BlueButton>
        </>
  )
}