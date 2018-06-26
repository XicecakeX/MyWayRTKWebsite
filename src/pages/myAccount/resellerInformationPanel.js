import React from 'react';
import S from '../Resources/css/myAccount.module.css';

export default class ResellerInformationPanel extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <fieldset>
        <legend> Reseller Information</legend>
        <div className = {S.button}>
          <input type = {S.button} id = "btnInformation" value = "Edit Information" onClick = {this.props.handle}/>
        </div>
        <div className = {S.item}>
          <div className = {S.title}> Reseller Name</div>
          <div className = {S.data}>

          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}> Reseller Statement</div>
          <div className = {S.data}>

          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}> Preferred Template</div>
          <div className = {S.data}>

          </div>
        </div>
      </fieldset>
    );
  }
}
