import React from 'react';
import S from '../resources/css/myAccount.module.css';

export default class LoginInformationPanel extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <fieldset>
        <legend> Login Information</legend>
        <div className = {S.button}>
          <input type = {S.button} id = "btnPassword" value = "Change Password" onClick = {this.props.handle}/>
        </div>
        <div className = {S.item}>
          <div className = {S.title}> Login ID</div>
          <div className = {S.data}> </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}> Password</div>
          <div className = {S.data}> </div>
        </div>
      </fieldset>
    );
  }
}
