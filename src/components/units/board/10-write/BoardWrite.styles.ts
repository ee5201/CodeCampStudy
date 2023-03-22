import styled from  '@emotion/styled'
import { IBlueButtonprops } from './BoardWrite.types'

export const RedInput= styled.input`
border-color:red;
`



export const BlueButton = styled.button`
background-color:${(props :IBlueButtonprops) => (props).zzz ? "yellow" : "default"};`