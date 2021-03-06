import React from 'react';
import S from './index.module.css';
import TextInput from '../../Resources/InputComponents/AddCustomerInputs/TextInput';
import PhoneInput from '../../Resources/InputComponents/AddCustomerInputs/PhoneInput';
import StateInput from '../../Resources/InputComponents/AddCustomerInputs/StateInput';
import ZipInput from '../../Resources/InputComponents/AddCustomerInputs/ZipInput';

export default class PrimaryContactPanel extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      affiliation: "",
      email: "",
      phone: {value: "", mask: ""},
      mobile: {value: "", mask: ""},
      address1: "",
      address2: "",
      city: "",
      state: "NONE",
      zip: ""
    };
  }

  /**Rendering Component*/
  render(){
    return(
      <fieldset className = {S.fieldset}>
        <legend> Primary Contact</legend>
        <div className = {S.column}>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> First Name
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.firstName}
                id = "txtFirstName"
                setInput = {(value) => {this.setState({firstName: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Last Name
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.lastName}
                id = "txtLastName"
                setInput = {(value) => {this.setState({lastName: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Affiliation
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.affiliation}
                id = "txtAffiliation"
                setInput = {(value) => {this.setState({affiliation: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Email
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.email}
                id = "txtEmail"
                setInput = {(value) => {this.setState({email: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Phone
            </div>
            <div className = {S.input}>
              <PhoneInput value = {this.state.phone.mask}
                id = "txtPhone"
                setInput = {(data) => {this.setState({phone: {value: data.value, mask: data.mask}})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span className = {S.blank}>*</span> Mobile
            </div>
            <div className = {S.input}>
              <PhoneInput value = {this.state.mobile.mask}
                id = "txtMobile"
                setInput = {(data) => {this.setState({mobile: {value: data.value, mask: data.mask}})}}/>
            </div>
          </div>
        </div>
        <div className = {S.column}>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Address 1
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.address1}
                id = "txtAddress1"
                setInput = {(value) => {this.setState({address1: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span className = {S.blank}>*</span> Address 2
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.address2}
                id = "txtAddress2"
                setInput = {(value) => {this.setState({address2: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> City
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.city}
                id = "txtCity"
                setInput = {(value) => {this.setState({city: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> State
            </div>
            <div className = {S.input}>
              <StateInput value = {this.state.state}
                id = "selState"
                setInput = {(value) => {this.setState({state: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Zip
            </div>
            <div className = {S.input}>
              <ZipInput value = {this.state.zip}
                id = "txtZip"
                setInput = {(value) => {this.setState({zip: value})}}/>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
