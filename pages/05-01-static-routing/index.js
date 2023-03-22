  import {useRouter} from 'next/router'


export default function StaticRoutingPage() {

    const router = useRouter()

    const OnclickMove = () =>{ 
        router.push("/05-01-static-routed")

    }
  return(
    <>
    <button onClick={OnclickMove}>페이지 이동하기</button>
    </>
  )
}