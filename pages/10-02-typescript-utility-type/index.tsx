export default function tyoescriptUtilityPage(){
  interface IProfile {
    name: string
    age: number
    school: string
    hooby?: string
  }
  //1. Pick Type
  type aaa = Pick<IProfile,"name" | "age"> 
  //2. Omit type
  type bbb = Omit<IProfile,"school">
  
  //3. Partial type 모두 물음표
  type ccc =Partial<IProfile>

  //4. Require Type 모두 필수 
  type ddd = Required<IProfile>

  //5. Record type
  type  eee = "철수 " | "영희" | "훈이" //union Type
  let child: eee
  child = "철수 "

  type fff = Record<eee,IProfile> //record type

    // ===== (type vs interface) 차이 : 선언 병합 ====
    interface IProfile {
      candy:number
    }  
    let profile: Partial<IProfile> = {}
    profile.candy = 10
    
}