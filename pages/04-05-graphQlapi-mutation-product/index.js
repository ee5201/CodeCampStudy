import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    #변수의 타입 적는곳
    createProduct(
      seller: $seller
      createProductInput: $createProductInput #실제 우리가 전달할 변수 적는 곳
    ) {
      message
      _id
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_PRODUCT);

  const onCLickSubmit = async () => {
    //스코프 체인
    const result = await 나의함수({
      variables: {
        //variables $역할을 해줌
        seller: "훈이",
        createProductInput: {
          name: "마우스",
          detail: "좋은 마우스",
          price: 3000,
        },
      },
    });
    console.log(result);
    alert(result.data.createProduct.message);
  };

  return <button onClick={onCLickSubmit}>GRAPHQL-API(동기)요청하기</button>;
}
