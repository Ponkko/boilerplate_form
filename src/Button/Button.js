import React from "react";
import styles from './Button.scss';

class Button extends React.Component {
  render() {
    return (
      <button className={styles.Button}>Hallo</button>
    );
  }
}
export default Button;