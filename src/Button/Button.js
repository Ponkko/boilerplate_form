import React, { Component } from "react";
import { StyledButton, IdButton } from './Button.styled';

class Button extends Component {
  render() {
    const { context } = this.props;
    return (
      <div>
        {
          context === "id" ? 
          <IdButton>Id Button</IdButton> :
          <StyledButton context={context}>Hallo</StyledButton>
        }
      </div>
    );
  }
}
export default Button;