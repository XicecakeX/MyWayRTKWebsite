import React from 'react';

export default class SubscriptionItemSelect extends React.Component{
  /**checkCredit Function*/
  checkCredit = () => {
    //Declaring fields
    var subscriptionArray = [
      "1 Year Renewal Subscription",
      "1 Year New Subscription",
      "1 Year Renewal Deere Subscription",
      "1 Year New Deere Subscription",
      "Xchange Only Subscription"
    ];
    var notEnough = "(Not Enough Credit) ";
    var optionArray = [];

    //Iterating through array
    for(var i = 0; i < subscriptionArray.length; i++){
      //Checking credit
      if(this.props.credit === 0){
        //Adding option to array
        optionArray.push(
          <option key = {i} value = {notEnough + subscriptionArray[i]}> {notEnough + subscriptionArray[i]}</option>
        );
      }else{
        //Adding option to array
        optionArray.push(
          <option key = {i} value = {subscriptionArray[i]}> {subscriptionArray[i]}</option>
        );
      }
    }

    //Returning option array
    return optionArray;
  }

  /**Rendering Component*/
  render(){
    return(
      <select id = "selSubscriptionItem"
        value = {this.props.value}
        className = {this.props.border}
        onChange = {this.props.getValue}>
        <option disabled hidden> NONE</option>
        {this.checkCredit()}
      </select>
    );
  }
}
