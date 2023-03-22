import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  qqq() {}
  OnclickUp = () => {
    this.setState({
      count: 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.OnclickUp}>카운트 올리기 </button>
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
