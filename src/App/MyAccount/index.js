import React from 'react';
import LoginPanel from './LoginInformationPanel';
import ContactPanel from './ContactInformationPanel';
import ResellerPanel from './ResellerInformationPanel';
import MyWayPanel from './MyWayRTKInformationPanel';

export default class MyAccount extends React.Component{
  /**buttonHandler Function*/
  buttonHandler = (event) => {
    //Declaring fields
    var field = event.target.id;

    //Checking field
    if(field === "btnPassword"){

    }else if(field === "btnContact"){

    }else{

    }
  }

  /**Rendering Webpage*/
  render(){
    return(
      <div>
        <LoginPanel handle = {this.buttonHandler}/>
        <ContactPanel handle = {this.buttonHandler}/>
        <ResellerPanel handle = {this.buttonHandler}/>
        <MyWayPanel />
      </div>
    );
  }
}
