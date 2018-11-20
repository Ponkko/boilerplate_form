import React from "react";
import styles from './Button.css';

class Button extends React.Component {
  render() {
    console.log('styles', styles);
    return (
      <button className={styles.Button}>Hallo</button>
    );
  }
}
export default Button;