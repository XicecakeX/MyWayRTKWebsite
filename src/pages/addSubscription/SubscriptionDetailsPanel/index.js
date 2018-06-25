import React from 'react';
import S from './index.module.css';
import MountSelect from './mountSelect';
import CustomerBox from './customerBox';
import Data from '../subscriptionData';
import F from '../functions';
var data = Data.subscriptionDetails;

export default class SubscriptionDetailsPanel extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      displayBox: "hideBox"
    };
  }

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
    if(field === "txtStartDate"){
      //Setting target
      checkObj.target = "startDate";
    }else if(field === "selTerm"){
      //Setting target
      checkObj.target = "subscriptionTerm";
    }else if(field === "txtSubscription"){
      //Setting target
      checkObj.target = "subscriptionName";
    }else if(field === "txtInput"){
      //Setting target
      checkObj.target = "customerData";
    }else if(field === "selMount"){
      //Setting target
      checkObj.target = "mountPoints";
    }else{
      //Setting data
      data.notes = val;
    }

    //Checking field
    if(field !== "txtNotes"){
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
        <legend> Subscription Details</legend>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Start Date (MM-DD-YYYY)
          </div>
          <div className = {S.input}>
            <input type = "date"
              className = {S[this.props.data.startDate.border]}
              id = "txtStartDate"
              onChange = {this.updateData}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Subscription Term
          </div>
          <div className = {S.input}>
            <select id = "selTerm"
              value = {this.props.data.subscriptionTerm.value}
              className = {S[this.props.data.subscriptionTerm.border]}
              onChange = {this.updateData}>
              <option disabled hidden> NONE</option>
              <option value = "Yearly"> Yearly</option>
            </select>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Subscription Name
          </div>
          <div className = {S.input}>
            <input type = "text"
              value = {this.props.data.subscriptionName.value}
              className = {S[this.props.data.subscriptionName.border]}
              id = "txtSubscription"
              onChange = {this.updateData}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span className = "blank">*</span> Reseller
          </div>
          <div className = {S.input}>

          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Customer
          </div>
          <div className = {S.input}>
            <CustomerBox getInput = {this.updateData}
              value = {this.props.data.customerData.value}
              display = {this.props.boxData}
              closeBox = {this.props.updateBox}/>
            <input type = "button"
              className = {S[this.props.data.customerData.border]}
              id = "btnCustomer"
              value = "Select Customer"
              onClick = {this.props.updateBox}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Mount Points
          </div>
          <div className = {S.input}>
            <MountSelect getValue = {this.updateData}
              value = {this.props.data.mountPoints.value}
              border = {S[this.props.data.mountPoints.border]}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span className = "blank">*</span> Notes
          </div>
          <div className = {S.input}>
            <textarea id = "txtNotes"
              value = {this.props.data.notes}
              className = {S.notes}
              onChange = {this.updateData}></textarea>
          </div>
        </div>
      </fieldset>
    );
  }
}
