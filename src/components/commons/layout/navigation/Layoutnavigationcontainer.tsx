import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import Layoutnavigationpresenter from "./Layoutnavigationpresenter";

export const Wrapper = styled.div`
  height: 100px;
  background-color: green;
`;

export default function Layoutnavigationcontainer() {
  const router = useRouter();
  const onClickItems = (event: ChangeEvent<HTMLDivElement>) => {
    void router.push(event.currentTarget.id);
  };

  return <Layoutnavigationpresenter onClickItems={onClickItems} />;
}
