import React from "react";

class FormComponent extends React.Component {
  state = { message: "Hello World!" };

  changeMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    const stateValue = this.state.message;
    return (
      <div>
        <h1>{this.state.message}</h1>
        <input value={stateValue} onChange={this.changeMessage} />
      </div>
    );
  }
}
export default FormComponent;