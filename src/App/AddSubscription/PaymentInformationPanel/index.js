import React from 'react';
import S from './index.module.css';
import SubscriptionItemInput from '../../Resources/InputComponents/AddSubscriptionInputs/SubscriptionItemInput';
import PaymentTypeInput from '../../Resources/InputComponents/AddSubscriptionInputs/PaymentTypeInput';
import TextInput from '../../Resources/InputComponents/AddSubscriptionInputs/TextInput';

export default class PaymentInformationPanel extends React.Component{
  /**Default Constructor*/
  constructor(props){
    super();
    this.state = {
      subscriptionItem: "NONE",
      paymentType: "NONE",
      PONumber: "",
      availableCredit: props.availableCredit
    };
  }

  /**Rendering Component*/
  render(){
    return(
      <fieldset className = {S.fieldset}>
        <legend> Payment Information</legend>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Subscription Item
          </div>
          <div className = {S.input}>
            <SubscriptionItemInput value = {this.state.subscriptionItem}
              setInput = {(value) => {this.setState({subscriptionItem: value})}}
              credit = {this.state.availableCredit}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Payment Type
          </div>
          <div className = {S.input}>
            <PaymentTypeInput value = {this.state.paymentType}
              setInput = {(value) => {this.setState({paymentType: value})}}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span className = {S.blank}>*</span> P.O. Number
          </div>
          <div className = {S.input}>
            <TextInput value = {this.state.PONumber}
              id = "txtPONumber"
              setInput = {(value) => {this.setState({PONumber: value})}}/>
          </div>
        </div>
        <div className = {S.item}>
          <fieldset className = {S.creditField}>
            <legend> Payment Via Store Credit</legend>
            <div className = {S.title}> {"Available Credit: $" + this.state.availableCredit}</div>
          </fieldset>
        </div>
      </fieldset>
    );
  }
}
