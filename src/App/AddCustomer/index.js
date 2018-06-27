import React from 'react';
import S from './index.module.css';
import LoginPanel from './LoginInformationPanel';
import PrimaryPanel from './PrimaryContactPanel';
import BillingPanel from './BillingContactPanel';
import SubmitButton from '../Resources/ButtonComponents/SubmitButton';
import CancelButton from '../Resources/ButtonComponents/CancelButton';

export default class AddCustomer extends React.Component{
  /**Rendering Webpage*/
  render(){
    return(
      <div>
        <p> Please note: Any field with an asterisk (<span className = {S.req}>*</span>) is required to submit this form.</p>
        <LoginPanel />
        <PrimaryPanel />
        <BillingPanel />
        <div className = {S.buttonArea}>
          <SubmitButton />
          <CancelButton />
        </div>
      </div>
    );
  }
}
