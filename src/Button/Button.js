import React, { Component } from "react";

const StyledButton = styled.button`
  color: red;
  background-color: blue;
`;

class Button extends Component {
  render() {
    return (
      <StyledButton>Hallo</StyledButton>
    );
  }
}
export default Button;