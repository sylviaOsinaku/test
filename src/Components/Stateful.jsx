import React from "react";
class Stateful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prodInCart: 3,
      name: "omo",
    };
    // this.state = {
    //   color : 'blue'
    // }
  }

  increase = () => {
    this.setState({ prodInCart: this.state.prodInCart + 1 });
  };
  render() {
    return (
      <>
        <div>React State</div>
        <div>
          THe total number of product in cart is {this.state.prodInCart}
        </div>
        <button onClick={this.increase}>+</button>
      </>
    );
  }
}

export default Stateful;
