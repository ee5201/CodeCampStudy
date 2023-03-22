import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();
  const onCLickSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onCLickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      제목:
      <input type="text" {...register("title")} />
      내용:
      <input type="text" {...register("contents")} />
      <button>등록하기</button>
    </form>
  );
}

{
  /* <button type="submit">지우기</button>
      <button type="reset">지우기</button> 
     */
}
