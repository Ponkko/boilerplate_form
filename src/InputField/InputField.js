import React from "react";
import styled from 'styled-components';

const Header = styled.h1`
  color: orange;
`;

class InputField extends React.Component {
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
        <Header>{this.state.message}</Header>
        <input value={stateValue} onChange={this.changeMessage} />
      </div>
    );
  }
}
export default InputField;