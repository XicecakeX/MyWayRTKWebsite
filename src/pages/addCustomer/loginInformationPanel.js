import React from 'react';
import S from '../resources/css/addCustomer.module.css';
var data = {
  dataID: "login",
  username: {value: "", border: ""},
  password: {value: "", border: ""}
};

export default class LoginInformationPanel extends React.Component{
  /**updateData Function*/
  updateData = (event) => {
    //Declaring fields
    var field = event.target.id;
    var val = event.target.value;
    var d = this.props.data;

    //Checking field
    if(field === "txtUsername"){
      //Setting data
      data.username = {value: val, border: "defaultBorder"};
      data.password = {value: d.password.value, border: d.password.border};
    }else{
      //Setting data
      data.username = {value: d.username.value, border: d.username.border};
      data.password = {value: val, border: "defaultBorder"};
    }

    //Updating data object
    this.props.getData(data);
  }

  /**Rendering Webpage*/
  render(){
    return(
      <fieldset>
        <legend> Login Information</legend>
        <div className = {S.column}>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Username
            </div>
            <div className = {S.input}>
              <input type = "text"
                value = {this.props.data.username.value}
                className = {this.props.data.username.border}
                id = "txtUsername"
                onChange = {this.updateData}/>
            </div>
          </div>
        </div>
        <div className = {S.column}>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Password
            </div>
            <div className = {S.input}>
              <input type = "password"
                value = {this.props.data.password.value}
                className = {this.props.data.password.border}
                id = "txtPassword"
                onChange = {this.updateData}/>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
