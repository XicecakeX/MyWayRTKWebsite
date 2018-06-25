import React from 'react';
import DetailsPanel from './SubscriptionDetailsPanel';
import PaymentPanel from './PaymentInformationPanel';
import Data from './subscriptionData';
import F from './functions';
var dataArray = Data.subscriptionData;

export default class AddSubscription extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      data: dataArray,
      displayBox: "hideBox",
      errorMessage: ""
    };
  }

  /**submitForm Function*/
  submitForm = () => {
    //Getting error results
    var errorResults = F.errorCheck(dataArray);

    this.setState({data: errorResults.array});
  }

  /**update Function*/
  update = (data) => {
    //Checking ID
    if(data.dataID === "subscriptionDetails"){
      //Updating array
      dataArray[0] = {
        startDate: {value: data.startDate.value, border: data.startDate.border},
        subscriptionTerm: {value: data.subscriptionTerm.value, border: data.subscriptionTerm.border},
        subscriptionName: {value: data.subscriptionName.value, border: data.subscriptionName.border},
        customerData: {value: data.customerData.value, border: data.customerData.border},
        mountPoints: {value: data.mountPoints.value, border: data.mountPoints.border},
        notes: data.notes
      };
    }else{
      //Updating array
      dataArray[1] = {
        subscriptionItem: {value: data.subscriptionItem.value, border: data.subscriptionItem.border},
        paymentType: {value: data.paymentType.value, border: data.paymentType.border},
        PONumber: data.PONumber
      }
    }

    //Setting state
    this.setState({data: dataArray});
  }

  /**updateBox Function*/
  updateBox = (event) => {
    //Declaring fields
    var field = event.target.id;
    var display = "";

    //Checking field
    if(field === "btnCustomer"){
      //Setting display
      display = "displayBox";
    }else{
      //Setting data
      dataArray[0].customerData.value = "";

      //Setting display
      display = "hideBox";
    }

    //Setting state
    this.setState({
      data: dataArray,
      displayBox: display
    });
  }

  /**Rendering Webpage*/
  render(){
    return(
      <div>
        <p> Please note: Any field with an asterisk (<span>*</span>) is required to submit this form.</p>
        <DetailsPanel getData = {(data) => {this.update(data)}}
          updateBox = {(data) => {this.updateBox(data)}}
          data = {this.state.data[0]}
          boxData = {this.state.displayBox}/>
        <PaymentPanel getData = {(data) => {this.update(data)}} data = {this.state.data[1]} availableCredit = {0}/>
        <div className = "buttonArea">
          <input type = "button" id = "btnSubmit" value = "Submit" onClick = {this.submitForm}/>
          <input type = "button" id = "btnCancel" value = "Cancel" onClick = {this.submitForm}/>
        </div>
      </div>
    );
  }
}
