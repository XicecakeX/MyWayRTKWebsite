import React from 'react';
import S from './index.module.css';

export default class MyWayRTKInformationPanel extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <fieldset className = {S.fieldset}>
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
