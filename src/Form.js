import React from 'react';

const Form = () => (
  <div>
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

export default Form;
