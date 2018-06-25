import React from 'react';
import S from './index.module.css';
import InputMask from 'react-input-mask';
import StateSelect from '../../resources/utilityComponents/stateSelect';
import F from '../functions';
var data = {
  dataID: "primary",
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

export default class PrimaryContactPanel extends React.Component{
  /**updateData Function*/
  updateData = (event) => {
    //Declaring fields
    var field = event.target.id;
    var val = event.target.value;
    var properties = F.filterProps(Object.getOwnPropertyNames(data), F.countProps(data), 2);
    var checkObj = {dataObj: data, data: this.props.data, target: "", props: properties, val: event.target.value};
    
    //Checking field
    if(field === "txtP_First"){
      //Setting target
      checkObj.target = "firstName";
    }else if(field === "txtP_Last"){
      //Setting target
      checkObj.target = "lastName";
    }else if(field === "txtP_Affiliation"){
      //Setting target
      checkObj.target = "affiliation";
    }else if(field === "txtP_Email"){
      //Setting target
      checkObj.target = "email";
    }else if(field === "txtP_Phone"){
      //Parsing string
      var phone = val.replace(/[\s+-]/g,'');

      //Setting data
      data.phoneMask = val;
      checkObj.val = phone;
      checkObj.dataObj = data;

      //Setting target
      checkObj.target = "phone";
    }else if(field === "txtP_Mobile"){
      //Parsing string
      var mobile = val.replace(/[\s+-]/g,'');

      //Setting data
      data.mobile = mobile;
      data.mobileMask = val;
    }else if(field === "txtP_Address1"){
      //Setting target
      checkObj.target = "address1";
    }else if(field === "txtP_Address2"){
      //Setting data
      data.address2 = val;
    }else if(field === "txtP_City"){
      //Setting target
      checkObj.target = "city";
    }else if(field === "selState"){
      //Setting target
      checkObj.target = "state";
    }else{
      //Setting target
      checkObj.target = "zip";
    }

    //Checking field
    if(field !== "txtP_Mobile" && field !== "txtP_Address2"){
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
        <legend> Primary Contact</legend>
        <div className = {S.column}>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> First Name
            </div>
            <div className = {S.input}>
              <input type = "text"
                value = {this.props.data.firstName.value}
                className = {this.props.data.firstName.border}
                id = "txtP_First"
                onChange = {this.updateData}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Last Name
            </div>
            <div className = {S.input}>
              <input type = "text"
                value = {this.props.data.lastName.value}
                className = {this.props.data.lastName.border}
                id = "txtP_Last"
                onChange = {this.updateData}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Affiliation
            </div>
            <div className = {S.input}>
              <input type = "text"
                value = {this.props.data.affiliation.value}
                className = {this.props.data.affiliation.border}
                id = "txtP_Affiliation"
                onChange = {this.updateData}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Email
            </div>
            <div className = {S.input}>
              <input type = "email"
                value = {this.props.data.email.value}
                className = {this.props.data.email.border}
                id = "txtP_Email"
                onChange = {this.updateData}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Phone
            </div>
            <div className = {S.input}>
              <InputMask id = "txtP_Phone"
                value = {this.props.data.phoneMask}
                className = {this.props.data.phone.border}
                mask = "+1 999-999-9999"
                maskChar = "_"
                onChange = {this.updateData}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span className = "blank">*</span> Mobile
            </div>
            <div className = {S.input}>
              <InputMask id = "txtP_Mobile"
                value = {this.props.data.mobileMask}
                mask = "+1 999-999-9999"
                maskChar = "_"
                onChange = {this.updateData}/>
            </div>
          </div>
        </div>
        <div className = {S.column}>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Address 1
            </div>
            <div className = {S.input}>
              <input type = "text"
                value = {this.props.data.address1.value}
                className = {this.props.data.address1.border}
                id = "txtP_Address1"
                onChange = {this.updateData}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span className = "blank">*</span> Address 2
            </div>
            <div className = {S.input}>
              <input type = "text"
                value = {this.props.data.address2}
                id = "txtP_Address2"
                onChange = {this.updateData}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> City
            </div>
            <div className = {S.input}>
              <input type = "text"
                value = {this.props.data.city.value}
                className = {this.props.data.city.border}
                id = "txtP_City"
                onChange = {this.updateData}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> State
            </div>
            <div className = {S.input}>
              <StateSelect getIndex = {this.updateData}
                border = {this.props.data.state.border}
                index = {this.props.data.state.value}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Zip
            </div>
            <div className = {S.input}>
              <InputMask id = "txtP_Zip"
                value = {this.props.data.zip.value}
                className = {this.props.data.zip.border}
                mask = "99999"
                maskChar = "-"
                onChange = {this.updateData}/>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
