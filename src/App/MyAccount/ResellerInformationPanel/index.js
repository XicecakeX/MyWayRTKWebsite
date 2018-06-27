import React from 'react';
import S from './index.module.css';
import EditInformationButton from '../../Resources/ButtonComponents/EditInformationButton';

export default class ResellerInformationPanel extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <fieldset className = {S.fieldset}>
        <legend> Reseller Information</legend>
        <div className = {S.button}>
          <EditInformationButton handleClick = {this.handleClick}/>
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
