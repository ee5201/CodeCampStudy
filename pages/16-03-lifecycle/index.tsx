import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  OnclickUp = () => {
    this.setState((prevState: { count: number }) => ({
      count: prevState.count + 1,
    }));
  };

  componentDidMount() {
    console.log("그리고 실행");
  }

  componentDidUpdate() {
    console.log("변경후 실행");
  }

  componentWillUnmount() {
    console.log("살아질때실행");
  }

  OnClickmove = () => {
    void Router.push("/");
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.OnclickUp}>카운트 올리기 </button>
        <button onClick={this.OnClickmove}>이동하기</button>
      </>
    );
  }
}

// class AAA {
//   power = 50;

//   attack() {}
// }

// class BBB extends AAA { => 상속
//   run() {}
// }

// const mybbb= new BBB()
// mybbb.
