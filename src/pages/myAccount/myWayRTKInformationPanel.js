import React from 'react';
import S from '../resources/css/myAccount.module.css';

export default class MyWayRTKInformationPanel extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <fieldset>
        <legend> MyWayRTK Information</legend>
        <div className = {S.item}>
          <div className = {S.title}> Credit Options</div>
          <div className = {S.data}>

          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}> Credit Limit</div>
          <div className = {S.data}>

          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}> Reseller Type</div>
          <div className = {S.data}>

          </div>
        </div>
      </fieldset>
    );
  }
}
