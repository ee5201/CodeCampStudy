import { fireEvent, render, screen } from "@testing-library/react";
import Counterstatedocumentpage from "../../pages/34-04-jest-unit-test-event/index";
import "@testing-library/jest-dom";

it("버튼을 눌렀을 경우 제대로 작동하는지 테스트 한다.", () => {
  render(<Counterstatedocumentpage />);

  fireEvent.click(screen.getByRole("CB"));

  expect(screen.getByRole("count")).toHaveTextContent("1");
});
