import React from 'react';
import S from '../resources/css/addSubscription.module.css';
import DetailsPanel from './subscriptionDetailsPanel';
import PaymentPanel from './paymentInformationPanel';

export default class AddSubscription extends React.Component{
  /**Rendering Webpage*/
  render(){
    return(
      <div>
        <p> Please note: Any field with an asterisk (<span>*</span>) is required to submit this form.</p>
        <DetailsPanel />
        <PaymentPanel availableCredit = {200}/>
        <div className = {S.buttonArea}>
          <input type = "button" id = "btnSubmit" value = "Submit" onClick = {this.submitForm}/>
          <input type = "button" id = "btnCancel" value = "Cancel" onClick = {this.submitForm}/>
        </div>
      </div>
    );
  }
}
