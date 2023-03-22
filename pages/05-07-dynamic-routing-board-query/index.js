  import {useRouter} from 'next/router'


export default function StaticRoutingPage() {

    const router = useRouter()

    const OnclickMove1 = () =>{ 
        router.push("/05-08-dynamic-routed-board-query/1")

    }

    const OnclickMove2 = () =>{ 
      router.push("/05-08-dynamic-routed-board-query/2")

  }

  const OnclickMove3 = () =>{ 
    router.push("/05-08-dynamic-routed-board-query/3")

}

  const OnclickMove100 = () =>{ 
    router.push("/05-08-dynamic-routed-board-query/100")

}
  return(
    <>
    <button onClick={OnclickMove1}>1번 게시글로 이동</button><br/>
    <button onClick={OnclickMove2}>2번 게시글로 이동</button><br/>
    <button onClick={OnclickMove3}>3번 게시글로 이동</button><br/>
    <button onClick={OnclickMove100}>100번 게시글로 이동</button><br/>
    </>
  )
}