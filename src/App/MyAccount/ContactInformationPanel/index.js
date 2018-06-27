import React from 'react';
import S from './index.module.css';
import EditContactButton from '../../Resources/ButtonComponents/EditContactButton';

export default class ContactInformationPanel extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <fieldset className = {S.fieldset}>
        <legend> Contact Information</legend>
        <div className = {S.button}>
          <EditContactButton handleClick = {this.handleClick}/>
        </div>
        <div>
          <table className = {S.table}>
            <tbody>
              <tr>
                <th></th>
                <th> Primary Contact</th>
                <th> Billing Contact</th>
                <th> Customer Service</th>
              </tr>
              <tr>
                <td className = {S.title}> Name</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td className = {S.title}> Affiliation</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td className = {S.title}> Address</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td className = {S.title}> Phone</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td className = {S.title}> Mobile</td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td className = {S.title}> Email</td>
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
