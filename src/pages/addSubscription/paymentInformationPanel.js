import React from 'react';
import S from '../resources/css/addSubscription.module.css';
import SubscriptionSelect from './subscriptionItemSelect';

export default class PaymentInformationPanel extends React.Component{
  /**Default Constructor*/
  constructor(props){
    super();
    this.state = {
      subscriptionItem: "",
      paymentType: "",
      PONumber: "",
      availableCredit: props.availableCredit
    };
  }

  /**componentUpdate Function*/
  componentUpdate = (event) => {
    //Declaring fields
    var field = event.target.id;
    var val = event.target.value;

    //Checking field
    if(field === "selSubscriptionItem"){
      //Setting state
      this.setState({subscriptionItem: val});
    }else if(field === "selPaymentType"){
      //Setting state
      this.setState({paymentType: val});
    }else{
      //Setting state
      this.setState({PONumber: val});
    }
  }

  /**Rendering Webpage*/
  render(){
    return(
      <fieldset>
        <legend> Payment Information</legend>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Subscription Item
          </div>
          <div className = {S.input}>
            <SubscriptionSelect credit = {this.state.availableCredit} getValue = {this.componentUpdate}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Payment Type
          </div>
          <div className = {S.input}>
            <select id = "selPaymentType" className = {S.field} defaultValue = "NONE" onChange = {this.componentUpdate}>
              <option disabled hidden> NONE</option>
              <option value = "Store Credit"> Store Credit</option>
            </select>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span className = "blank">*</span> P.O. Number
          </div>
          <div className = {S.input}>
            <input type = "text" id = "txtPONumber" className = {S.field} value = {this.state.PONumber} onChange = {this.componentUpdate}/>
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
