import * as S from './BoardWrite.styles'

export default function BoardWriteUI (props) {


  return(
    <>
    writer:<S.RedInput onChange={props.bbb} type="text"/><br/>
        Title<input onChange={props.onChangeTitle} type="text"/><br/>
        Contents:<input onChange={props.onChangeContents} type="text"/><br/>
        <S.BlueButton 
        zzz = {props.mycolor}
        onClick={props.onCLickSubmit}>
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.BlueButton>
        </>
  )
}