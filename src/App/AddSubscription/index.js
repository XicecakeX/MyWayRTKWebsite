import React from 'react';
import S from './index.module.css';
import DetailsPanel from './SubscriptionDetailsPanel';
import PaymentPanel from './PaymentInformationPanel';
import SubmitButton from '../Resources/ButtonComponents/SubmitButton';
import CancelButton from '../Resources/ButtonComponents/CancelButton';

export default class AddSubscription extends React.Component{
  /**Rendering Webpage*/
  render(){
    return(
      <div>
        <p> Please note: Any field with an asterisk (<span className = {S.req}>*</span>) is required to submit this form.</p>
        <DetailsPanel />
        <PaymentPanel availableCredit = {10}/>
        <div className = {S.buttonArea}>
          <SubmitButton />
          <CancelButton />
        </div>
      </div>
    );
  }
}
