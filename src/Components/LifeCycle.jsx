import React from "react";
export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: "user(Default)",
      adminLoggedIn: false,
    };
  }
  componentDidMount() {
    this.setState({ showModal: true });
  }
  componentDidUpdate() {
    console.log("component was updated!");
  }
  updateName = () => {
    this.setState({ name: "Ugonna" });
  };

  componentWillUnmount() {}
  render() {
    return (
      <div>
        <div
          className={`custom-modal shadow-lg ${
            !this.state.showModal && "d-none"
          }`}
        >
          Show when modal active
          <p>{this.state.name}</p>
          <button onClick={this.updateName}>Change Name</button>
        </div>
        {this.state.adminLoggedIn ? <Admin /> : <User />}
        <button onClick={() => this.setState({ adminLoggedIn: true })}>
          Admin
        </button>
        <button onClick={() => this.setState({ adminLoggedIn: false })}>
          user
        </button>
      </div>
    );
  }
}

class User extends React.Component {
  componentWillUnmount() {
    console.log("I am being removed");
  }
  render() {
    return <div className="user">Hello User</div>;
  }
}

class Admin extends React.Component {
  render() {
    return <div className="admin">I have admin rights</div>;
  }
}
