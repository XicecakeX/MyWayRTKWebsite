import React from 'react';
import S from './index.module.css';
import InputMask from 'react-input-mask';
import StateSelect from '../../resources/utilityComponents/stateSelect';
import F from '../functions';
var data = {
  dataID: "billing",
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

export default class BillingContactPanel extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      isDisabled: false
    };
  }

  /**updateData Function*/
  updateData = (event) => {
    //Declaring fields
    var field = event.target.id;
    var val = event.target.value;
    var properties = F.filterProps(Object.getOwnPropertyNames(data), F.countProps(data), 2);
    var checkObj = {dataObj: data, data: this.props.data, target: "", props: properties, val: event.target.value};

    //Checking field
    if(field === "txtB_First"){
      //Setting target
      checkObj.target = "firstName";
    }else if(field === "txtB_Last"){
      //Setting target
      checkObj.target = "lastName";
    }else if(field === "txtB_Affiliation"){
      //Setting target
      checkObj.target = "affiliation";
    }else if(field === "txtB_Email"){
      //Setting target
      checkObj.target = "email";
    }else if(field === "txtB_Phone"){
      //Parsing string
      var phone = val.replace(/[\s+-]/g,'');

      //Setting data
      data.phoneMask = val;
      checkObj.val = phone;
      checkObj.dataObj = data;

      //Setting target
      checkObj.target = "phone";
    }else if(field === "txtB_Mobile"){
      //Parsing string
      var mobile = val.replace(/[\s+-]/g,'');

      //Setting data
      data.mobile = mobile;
      data.mobileMask = val;
    }else if(field === "txtB_Address1"){
      //Setting target
      checkObj.target = "address1";
    }else if(field === "txtB_Address2"){
      //Setting data
      data.address2 = val;
    }else if(field === "txtB_City"){
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
    if(field !== "txtB_Mobile" && field !== "txtB_Address2"){
      //Calling checkField function
      data = F.checkField(checkObj);
    }

    //Updating data object
    this.props.getData(data);
  }

  /**updateCheck Function*/
  updateCheck = (event) => {
    //Checking checkbox
    if(event.target.checked === true){
      //Updating data
      this.props.billingSame(true);

      //Setting state
      this.setState({isDisabled: true});
    }else{
      //Updating data
      this.props.billingSame(false);

      //Setting state
      this.setState({isDisabled: false});
    }
  }

  test = () => {
    //console.log(this.props.data);
  }

  /**Rendering Webpage*/
  render(){
    return(
      <fieldset>
        {this.test()}
        <legend> Billing Contact</legend>
        <div className = {S.check}>
          <input type = "checkbox" onChange = {this.updateCheck}/> Billing same as primary
        </div>
        <div className = {S.column}>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> First Name
            </div>
            <div className = {S.input}>
              <input type = "text"
                value = {this.props.data.firstName.value}
                className = {this.props.data.firstName.border}
                disabled = {this.state.isDisabled}
                id = "txtB_First"
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
                disabled = {this.state.isDisabled}
                id = "txtB_Last"
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
                disabled = {this.state.isDisabled}
                id = "txtB_Affiliation"
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
                disabled = {this.state.isDisabled}
                id = "txtB_Email"
                onChange = {this.updateData}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Phone
            </div>
            <div className = {S.input}>
              <InputMask id = "txtB_Phone"
                value = {this.props.data.phoneMask}
                className = {this.props.data.phone.border}
                disabled = {this.state.isDisabled}
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
              <InputMask id = "txtB_Mobile"
                value = {this.props.data.mobileMask}
                disabled = {this.state.isDisabled}
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
                disabled = {this.state.isDisabled}
                id = "txtB_Address1"
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
                disabled = {this.state.isDisabled}
                id = "txtB_Address2"
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
                disabled = {this.state.isDisabled}
                id = "txtB_City"
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
                index = {this.props.data.state.value}
                isDisabled = {this.state.isDisabled}/>
            </div>
          </div>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Zip
            </div>
            <div className = {S.input}>
              <InputMask id = "txtB_Zip"
                value = {this.props.data.zip.value}
                className = {this.props.data.zip.border}
                disabled = {this.state.isDisabled}
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
