import React from 'react';
import S from './index.module.css';
import ChangePasswordButton from '../../Resources/ButtonComponents/ChangePasswordButton';

export default class LoginInformationPanel extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <fieldset className = {S.fieldset}>
        <legend> Login Information</legend>
        <div className = {S.button}>
          <ChangePasswordButton handleClick = {this.handleClick}/>
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
