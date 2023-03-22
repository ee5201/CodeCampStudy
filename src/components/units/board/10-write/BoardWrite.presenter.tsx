import { ChangeEvent } from 'react'
import {RedInput,BlueButton} from './BoardWrite.styles'
import { IBoardWriteUIprops } from './BoardWrite.types'


export default function BoardWriteUI (props:IBoardWriteUIprops) {

  return(
    <>
    writer:<RedInput onChange={props.onChangeWriter} type="text" defaultValue={props.data?.fetchBoard.writer}/><br/>
        Title<input onChange={props.onChangeTitle} type="text" defaultValue={props.data?.fetchBoard.title}/><br/>
        Contents:<input onChange={props.onChangeContents} type="text" defaultValue={props.data?.fetchBoard.contents}/><br/>
        <BlueButton 
        zzz = {props.mycolor}
        onClick={props.isEdit ? props.onClickUpdate : props.onCLickSubmit }>
          {props.isEdit ? "수정" : "등록"}
        </BlueButton>
        </>
  )
}