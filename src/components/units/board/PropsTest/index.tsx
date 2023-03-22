interface IProps {
  School: string;
  children: JSX.Element;
}

export default function Layout(props: IProps) {
  return (
    <>
      <div> 안녕하세요 영희 입니다.</div>
      <div>{props.School}</div>
      <div>{props.children}</div>
      <div>hi i'm manggu</div>
    </>
  );
}
