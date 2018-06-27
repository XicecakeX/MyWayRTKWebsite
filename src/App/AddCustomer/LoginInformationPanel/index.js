import React from 'react';
import S from './index.module.css';
import TextInput from '../../Resources/InputComponents/AddCustomerInputs/TextInput';

export default class LoginInformationPanel extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  /**Rendering Component*/
  render(){
    return(
      <fieldset className = {S.fieldset}>
        <legend> Login Information</legend>
        <div className = {S.column}>
          <div className = {S.item}>
            <div className = {S.title}>
              <span>*</span> Username
            </div>
            <div className = {S.input}>
              <TextInput value = {this.state.username}
                id = "txtUsername"
                setInput = {(value) => {this.setState({username: value})}}/>
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
                setInput = {(value) => {this.setState({password: value})}}/>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
