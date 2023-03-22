import {RedInput,BlueButton} from './BoardWrite.styles'

export default function BoardWriteUI (props) {

  return(
    <>
    writer:<RedInput onChange={props.bbb} type="text"/><br/>
        Title<input onChange={props.onChangeTitle} type="text"/><br/>
        Contents:<input onChange={props.onChangeContents} type="text"/><br/>
        <BlueButton 
        zzz = {props.mycolor}
        onClick={props.isEdit ? props.onClickUpdate : props.onCLickSubmit }>
          {props.isEdit ? "수정" : "등록"}
        </BlueButton>
        </>
  )
}