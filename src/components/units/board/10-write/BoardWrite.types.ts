import { ChangeEvent } from "react"
import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardWriteprops {
  isEdit : boolean
  data?: Pick<IQuery,"fetchBoard">
}
interface IData {
  
}

export interface IBoardWriteUIprops{
  onCLickSubmit:() => void  
  onChangeWriter:(event: ChangeEvent<HTMLInputElement>) => void  
  onChangeTitle:(event: ChangeEvent<HTMLInputElement>) => void  
  onChangeContents:(event: ChangeEvent<HTMLInputElement>) => void  
  onClickUpdate:() => void  
  mycolor: boolean
  isEdit: boolean
  data: Pick<IQuery,"fetchBoard">
//return이 없는걸 void라고 한다.
}

export interface IBlueButtonprops{
  zzz:boolean
}

export interface IMyvariables {
  number: number,
  writer?: string,
  title?: string,
  contents?: string
}