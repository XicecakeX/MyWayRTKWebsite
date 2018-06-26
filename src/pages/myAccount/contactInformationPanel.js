import React from 'react';
import S from '../Resources/css/myAccount.module.css';

export default class ContactInformationPanel extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <fieldset>
        <legend> Contact Information</legend>
        <div className = {S.button}>
          <input type = {S.button} id = "btnContact" value = "Edit Contact" onClick = {this.props.handle}/>
        </div>
        <div className = {S.item}>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th> Primary Contact</th>
                <th> Billing Contact</th>
                <th> Customer Service</th>
              </tr>
              <tr>
                <td id = {S.title}> Name</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td id = {S.title}> Affiliation</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td id = {S.title}> Address</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td id = {S.title}> Phone</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td id = {S.title}> Mobile</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td id = {S.title}> Email</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>
    );
  }
}
