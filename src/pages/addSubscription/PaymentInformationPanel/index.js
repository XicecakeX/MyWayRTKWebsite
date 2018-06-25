import React from 'react';
import S from './index.module.css';
import SubscriptionSelect from './subscriptionSelect';
import Data from '../subscriptionData';
import F from '../functions';
var data = Data.paymentInformation;

export default class PaymentInformationPanel extends React.Component{
  /**updateData Function*/
  updateData = (event) => {
    //Declaring fields
    var field = event.target.id;
    var val = event.target.value;
    var properties = F.filterProps(Object.getOwnPropertyNames(data), F.countProps(data));
    var checkObj = {
      dataObj: data,
      data: this.props.data,
      target: "",
      props: properties,
      value: val
    }

    //Checking field
    if(field === "selSubscriptionItem"){
      //Setting target
      checkObj.target = "subscriptionItem";
    }else if(field === "selPaymentType"){
      //Setting target
      checkObj.target = "paymentType";
    }else{
      //Setting data
      data.PONumber = val;
    }

    //Checking field
    if(field !== "txtPONumber"){
      //Calling checkField function
      data = F.checkField(checkObj);
    }

    //Updating data object
    this.props.getData(data);
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
            <SubscriptionSelect getValue = {this.updateData}
              value = {this.props.data.subscriptionItem.value}
              border = {S[this.props.data.subscriptionItem.border]}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Payment Type
          </div>
          <div className = {S.input}>
            <select id = "selPaymentType"
              value = {this.props.data.paymentType.value}
              className = {S[this.props.data.paymentType.border]}
              onChange = {this.updateData}>
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
            <input type = "text"
              value = {this.props.data.PONumber}
              className = {S.field}
              id = "txtPONumber"
              onChange = {this.updateData}/>
          </div>
        </div>
        <div className = {S.item}>
          <fieldset className = {S.creditField}>
            <legend> Payment Via Store Credit</legend>
            <div className = {S.title}> {"Available Credit: $" + this.props.availableCredit}</div>
          </fieldset>
        </div>
      </fieldset>
    );
  }
}
