import React from 'react';

class FormComponent extends React.Component {
  render() {
    return(
      <div>
        <form>
          <table>
            <tbody>
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
            </tbody>
          </table>
        </form>
      </div>
    )
  }
};

export default FormComponent;
