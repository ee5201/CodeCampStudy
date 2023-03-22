import { Observable } from "@apollo/client";
import { from } from "zen-observable";

export default function ObsevableFlatmap() {
  const onclickButton = () => {
    // new Promise(()=>{})
    // new Observable(()=>{})
    // prettier-ignore
    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"]) // fromPromise
      .flatMap((el:string) => from([`${el}결과에 qqq적용`, `${el} 결과에 zzz 적용`]))
      .subscribe((el) => console.log(el));
  };

  return (
    <>
      <button onClick={onclickButton}>클릭</button>
    </>
  );
}
