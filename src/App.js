import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <table>
            <tr>
              <td><label>Name</label></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><label>Vorname</label></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><label>Email</label></td>
              <td><input type="email" /></td>
            </tr>
            <tr>
              <td><label>Telefon</label></td>
              <td><input type="phone" /></td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default App;
