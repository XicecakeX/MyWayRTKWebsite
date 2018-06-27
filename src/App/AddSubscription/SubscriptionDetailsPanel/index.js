import React from 'react';
import S from './index.module.css';
import StartDateInput from '../../Resources/InputComponents/AddSubscriptionInputs/StartDateInput';
import SubscriptionTermInput from '../../Resources/InputComponents/AddSubscriptionInputs/SubscriptionTermInput';
import TextInput from '../../Resources/InputComponents/AddSubscriptionInputs/TextInput';
import SelectCustomerButton from '../../Resources/ButtonComponents/SelectCustomerButton';
import CustomerBox from '../../Resources/UtilityComponents/CustomerBox';
import MountInput from '../../Resources/InputComponents/AddSubscriptionInputs/MountInput';
import NotesInput from '../../Resources/InputComponents/AddSubscriptionInputs/NotesInput';

export default class SubscriptionDetailsPanel extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      startDate: "",
      subscriptionTerm: "NONE",
      subscriptionName: "",
      customer: "",
      mountPoint: "NONE",
      notes: "",
      displayBox: "hide"
    };
  }

  /**handleBox Function*/
  handleBox = (id) => {
    //Checking id
    if(id === "btnSelectCustomer"){
      //Setting state
      this.setState({displayBox: "display"});
    }else{
      //Setting state
      this.setState({customer: "", displayBox: "hide"});
    }
  }

  /**Rendering Component*/
  render(){
    return(
      <fieldset className = {S.fieldset}>
        <legend> Subscription Details</legend>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Start Date (MM-DD-YYYY)
          </div>
          <div className = {S.input}>
            <StartDateInput setInput = {(value) => {this.setState({startDate: value})}}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Subscription Term
          </div>
          <div className = {S.input}>
            <SubscriptionTermInput value = {this.state.subscriptionTerm}
              setInput = {(value) => {this.setState({subscriptionTerm: value})}}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Subscription Name
          </div>
          <div className = {S.input}>
            <TextInput value = {this.state.subscriptionName}
              id = "txtSubscriptionName"
              setInput = {(value) => {this.setState({subscriptionName: value})}}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span className = {S.blank}>*</span> Reseller
          </div>
          <div className = {S.input}>

          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Customer
          </div>
          <div className = {S.input}>
            <CustomerBox value = {this.state.customer}
              displayBox = {this.state.displayBox}
              setDisplay = {(id) => {this.handleBox(id)}}
              setInput = {(value) => {this.setState({customer: value})}}/>
            <SelectCustomerButton handleClick = {(id) => {this.handleBox(id)}}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Mount Points
          </div>
          <div className = {S.input}>
            <MountInput value = {this.state.mountPoint}
              setInput = {(value) => {this.setState({mountPoint: value})}}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span className = {S.blank}>*</span> Notes
          </div>
          <div className = {S.input}>
            <NotesInput value = {this.state.notes} setInput = {(value) => {this.setState({notes: value})}}/>
          </div>
        </div>
      </fieldset>
    );
  }
}
