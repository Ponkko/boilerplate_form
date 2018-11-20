import React from "react";
import styles from './InputField.css';

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
        <h1 className={styles.headline}>{this.state.message}</h1>
        <input value={stateValue} onChange={this.changeMessage} />
      </div>
    );
  }
}
export default InputField;