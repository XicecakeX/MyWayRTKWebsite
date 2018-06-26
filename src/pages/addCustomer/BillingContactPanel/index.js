import React from 'react';
import S from './index.module.css';
import CheckBoxInput from '../../Resources/InputComponents/CheckBoxInput';
import TextInput from '../../Resources/InputComponents/CTextInput';
import PhoneInput from '../../Resources/InputComponents/PhoneInput';
import StateInput from '../../Resources/InputComponents/StateInput';
import ZipInput from '../../Resources/InputComponents/ZipInput';

export default class BillingContactPanel extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      checked: false,
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

  /**Rendering Webpage*/
  render(){
    return(
      <fieldset className = {S.fieldset}>
        <legend className = {S.legend}> Billing Contact</legend>
        <div className = {S.check}>
          <CheckBoxInput checked = {this.state.checked}
            setInput = {(value) => {this.setState({checked: value})}}/> Billing same as primary
        </div>
        <div className = {S.column}>
          <div className = {S.item}>
            <div className = {S.title}>
              <span className = {S.req}>*</span> First Name
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.firstName}
                id = "txtFirstName"
                setInput = {(value) => {this.setState({firstName: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span className = {S.req}>*</span> Last Name
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.lastName}
                id = "txtLastName"
                setInput = {(value) => {this.setState({lastName: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span className = {S.req}>*</span> Affiliation
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.affiliation}
                id = "txtAffiliation"
                setInput = {(value) => {this.setState({affiliation: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span className = {S.req}>*</span> Email
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.email}
                id = "txtEmail"
                setInput = {(value) => {this.setState({email: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span className = {S.req}>*</span> Phone
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
              <span className = {S.req}>*</span> Address 1
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
              <span className = {S.req}>*</span> City
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.city}
                id = "txtCity"
                setInput = {(value) => {this.setState({city: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span className = {S.req}>*</span> State
            </div>
            <div className = {S.input}>
              <StateInput value = {this.state.state}
                id = "selState"
                setInput = {(value) => {this.setState({state: value})}}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span className = {S.req}>*</span> Zip
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
