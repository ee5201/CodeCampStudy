import { fireEvent, render, screen } from "@testing-library/react";
import Password from "antd/es/input/Password";
import GraphqlMutationPage, {
  CREATE_BOARD,
} from "../../pages/34-05-jest-unit-test-mocking";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

// 가짜 useRouter 만들고 ,가 짜 push 만들기
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const push = jest.fn();
(useRouter as jest.Mock).mockImplementation(() => ({
  push,
})); // as 는 타입을 말한다.

const mocks = [
  {
    request: {
      query: CREATE_BOARD,
      variables: {
        writer: "철수",
        title: "안녕하세요",
        contents: "반갑습니다.",
        Password: "1234",
      },
    },
    result: {
      data: {
        creatBoard: {
          _id: "백엔드에서 받은 게시글  ID",
          writer: "철수",
          title: "안녕하세요",
          contents: "반갑습니다.",
        },
      },
    },
  },
];

it("API를 모킹하여 테스트하자 !!!", () => {
  render(
    <MockedProvider mocks={mocks}>
      <GraphqlMutationPage />
    </MockedProvider>
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "철수" },
  });

  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "안녕핫에ㅛ" },
  });

  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "반갑습니다." },
  });

  fireEvent.click(screen.getByRole("submit-button"));

  // await waitFor(()=>{
  //   expect(푸시결과).toHaveBeenCalledWith("/boards/게시글ID");
  // })
});
