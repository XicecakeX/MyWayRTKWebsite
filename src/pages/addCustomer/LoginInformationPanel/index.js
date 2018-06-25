import React from 'react';
import S from './index.module.css';
import TextInput from '../Components/textInput';

export default class LoginInformationPanel extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  /**updateData Function*/
  updateData = (event) => {
    //Declaring fields
    var field = event.target.id;
    var val = event.target.value;

    //Checking field
    if(field === "txtUsername"){
      //Setting state
      this.setState({username: val});
    }else{
      //Setting state
      this.setState({password: val});
    }
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
              <TextInput value = {this.state.username}
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
              <TextInput value = {this.state.password}
                id = "txtPassword"
                onChange = {this.updateData}/>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
