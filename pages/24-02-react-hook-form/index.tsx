import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { registerVersion } from "firebase/app";

interface IFORMDATA {
  writer: string;
  title: string;
  contents: string;
  password: string;
}

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요"),
  title: yup.string().required("제목를 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요"),

  // email: yup
  //   .string()
  //   .email("이메을 형식에 적합하지 않습니다. ")
  //   .required("이메을은 필수 입력입니다. "),
  // password: yup
  //   .string()
  //   .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요 .")
  //   .max(15, "비밀번호 최대 15자리 입력해주세요 ")
  //   .required("비밀번호는 필수 입력입니다. "),
  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-\d{3,4}-\d{4}$/)
  //   .required("휴대폰은 필수 입력입니다 "),
});

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm<IFORMDATA>({
    resolver: yupResolver(schema),
    mode: "onChange", //트리거라고 표현한다.
  });
  const onCLickSubmit = (data: IFORMDATA) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onCLickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      제목:
      <input type="text" {...register("title")} />
      {formState.errors.title?.message}
      내용:
      <input type="text" {...register("contents")} />
      {formState.errors.contents?.message}
      비밀번호:
      <input type="password" {...register("password")} />
      {formState.errors.password?.message}
      <button style={{ backgroundClip: formState.isValid ? "yellow" : "" }}>
        등록하기
      </button>
    </form>
  );
}
