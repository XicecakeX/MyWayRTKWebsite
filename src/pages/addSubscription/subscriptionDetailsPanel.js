import React from 'react';
import S from '../resources/css/addSubscription.module.css';
import MountSelect from '../resources/utilityComponents/mountSelect';

export default class SubscriptionDetailsPanel extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      startDate: "",
      term: "",
      name: "",
      reseller: "",
      customer: "",
      mountPoints: "",
      notes: ""
    };
  }

  /**componentUpdate Function*/
  componentUpdate = (event) => {
    //Declaring fields
    var field = event.target.id;
    var val = event.target.value;

    //Checking field
    if(field === "txtStartDate"){
      //Setting state
      this.setState({startDate: val});
    }else if(field === "selTerm"){
      //Setting state
      this.setState({term: val});
    }else if(field === "txtSubscription"){
      //Setting state
      this.setState({name: val});
    }else if(field === "selMount"){
      //Setting state
      this.setState({mountPoints: val});
    }else{
      //Setting state
      this.setState({notes: val});
    }
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
            <input type = "date" className = "startDate" id = "txtStartDate" onChange = {this.componentUpdate}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Subscription Term
          </div>
          <div className = {S.input}>
            <select defaultValue = "NONE" id = "selTerm" onChange = {this.componentUpdate}>
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
            <input type = "text" className = {S.field} id = "txtSubscription" value = {this.state.name} onChange = {this.componentUpdate}/>
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

          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span>*</span> Mount Points
          </div>
          <div className = {S.input}>
            <MountSelect getValue = {this.componentUpdate}/>
          </div>
        </div>
        <div className = {S.item}>
          <div className = {S.title}>
            <span className = "blank">*</span> Notes
          </div>
          <div className = {S.input}>
            <textarea id = "txtNotes" value = {this.state.notes} onChange = {this.componentUpdate}></textarea>
          </div>
        </div>
      </fieldset>
    );
  }
}
