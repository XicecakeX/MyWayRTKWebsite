import React from 'react';
import LoginPanel from './LoginInformationPanel';
import PrimaryPanel from './PrimaryContactPanel';
import BillingPanel from './BillingContactPanel';
import dataArray from './dataArray';
import F from './functions';

export default class AddCustomer extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      data: dataArray,
      checked: false,
      errorMessage: ""
    };
  }

  /**submitForm Function*/
  submitForm = () => {
    //Getting error results
    var errorResults = F.errorCheck(dataArray, this.state.checked);

    //Checking error results
    if(errorResults.errorsDetected === true){
      //Setting state
      this.setState({
        data: errorResults.array,
        errorMessage: "Highlighted fields cannot be empty!"
      });
    }else{
      //Setting state
      this.setState({
        data: errorResults.array,
        errorMessage: ""
      });
    }
  }

  /**update Function*/
  update = (data) => {
    //Checking ID
    if(data.dataID === "login"){
      //Updating array
      dataArray[0] = {
        username: {value: data.username.value, border: data.username.border},
        password: {value: data.password.value, border: data.password.border}
      };
    }else if(data.dataID === "primary"){
      //Updating array
      dataArray[1] = {
        firstName: {value: data.firstName.value, border: data.firstName.border},
        lastName: {value: data.lastName.value, border: data.lastName.border},
        affiliation: {value: data.affiliation.value, border: data.affiliation.border},
        email: {value: data.email.value, border: data.email.border},
        phone: {value: data.phone.value, border: data.phone.border},
        phoneMask: data.phoneMask,
        mobile: data.mobile,
        mobileMask: data.mobileMask,
        address1: {value: data.address1.value, border: data.address1.border},
        address2: data.address2,
        city: {value: data.city.value, border: data.city.border},
        state: {value: data.state.value, border: data.state.border},
        zip: {value: data.zip.value, border: data.zip.border}
      };
    }else{
      //Updating array
      dataArray[2] = {
        firstName: {value: data.firstName.value, border: data.firstName.border},
        lastName: {value: data.lastName.value, border: data.lastName.border},
        affiliation: {value: data.affiliation.value, border: data.affiliation.border},
        email: {value: data.email.value, border: data.email.border},
        phone: data.phone,
        phoneMask: data.phoneMask,
        mobile: data.mobile,
        mobileMask: data.mobileMask,
        address1: {value: data.address1.value, border: data.address1.border},
        address2: data.address2,
        city: {value: data.city.value, border: data.city.border},
        state: {value: data.state.value, border: data.state.border},
        zip: {value: data.zip.value, border: data.zip.border}
      };
    }

    //Checking state
    if(this.state.checked === true){
      //Setting data
      dataArray[2] = dataArray[1];
    }

    //Setting state
    this.setState({data: dataArray});
  }

  /**updateCheck Function*/
  updateCheck = (isChecked) => {
    //Checking boolean
    if(isChecked === true){
      //Setting data
      dataArray[2] = dataArray[1];

      //Setting state
      this.setState({
        checked: true,
        data: dataArray
      });
    }else{
      //Clearing values
      dataArray[2] = {
        firstName: {value: "", border: ""},
        lastName: {value: "", border: ""},
        affiliation: {value: "", border: ""},
        email: {value: "", border: ""},
        phone: {value: "", border: ""},
        phoneMask: "",
        mobile: "",
        mobileMask: "",
        address1: {value: "", border: ""},
        address2: "",
        city: {value: "", border: ""},
        state: {value: "NONE", border: ""},
        zip: {value: "", border: ""}
      };

      //Setting state
      this.setState({
        checked: false,
        data: dataArray
      });
    }
  }

  test = () => {
    //console.log(this.state.data[1].phone);
    //console.log(this.state.data[1].phoneMask);
  }

  /**Rendering Webpage*/
  render(){
    return(
      <div>
        {this.test()}
        <p> Please note: Any field with an asterisk (<span>*</span>) is required to submit this form.</p>
        <LoginPanel getData = {(data) => {this.update(data)}} data = {this.state.data[0]}/>
        <PrimaryPanel getData = {(data) => {this.update(data)}} data = {this.state.data[1]}/>
        <BillingPanel getData = {(data) => {this.update(data)}}
          data = {this.state.data[2]}
          billingSame = {(isChecked) => {this.updateCheck(isChecked)}}/>
        <div className = "errorDiv"> {this.state.errorMessage}</div>
        <div className = "buttonArea">
          <input type = "button" id = "btnSave" value = "Save" onClick = {this.submitForm}/>
          <input type = "button" id = "btnCancel" value = "Cancel" onClick = {this.submitForm}/>
        </div>
      </div>
    );
  }
}
