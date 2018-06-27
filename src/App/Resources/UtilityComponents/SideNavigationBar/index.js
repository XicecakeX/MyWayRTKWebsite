import React from 'react';
import S from './index.module.css';

export default class SideNavigationBar extends React.Component{
  /**Default Constructor*/
  constructor(data){
    super();
    //Checking page
    if(data.page === 1){
      //Setting state
      this.state = {
        p1: "selected",
        p2: "default",
        p3: "default",
        p4: "default",
        p5: "default",
        p6: "default",
        p7: "default",
      };
    }else if(data.page === 2){
      //Setting state
      this.state = {
        p1: "default",
        p2: "selected",
        p3: "default",
        p4: "default",
        p5: "default",
        p6: "default",
        p7: "default",
      };
    }else if(data.page === 3){
      //Setting state
      this.state = {
        p1: "default",
        p2: "default",
        p3: "selected",
        p4: "default",
        p5: "default",
        p6: "default",
        p7: "default",
      };
    }else if(data.page === 4){
      //Setting state
      this.state = {
        p1: "default",
        p2: "default",
        p3: "default",
        p4: "selected",
        p5: "default",
        p6: "default",
        p7: "default",
      };
    }else if(data.page === 5){
      //Setting state
      this.state = {
        p1: "default",
        p2: "default",
        p3: "default",
        p4: "default",
        p5: "selected",
        p6: "default",
        p7: "default",
      };
    }else if(data.page === 6){
      //Setting state
      this.state = {
        p1: "default",
        p2: "default",
        p3: "default",
        p4: "default",
        p5: "default",
        p6: "selected",
        p7: "default",
      };
    }else{
      //Setting state
      this.state = {
        p1: "default",
        p2: "default",
        p3: "default",
        p4: "default",
        p5: "default",
        p6: "default",
        p7: "selected",
      };
    }
  }

  /**Rendering Component*/
  render(){
    return(
      <div className = {S.sideNav}>
        <a className = {S[this.state.p1]}> My Account</a>
        <a className = {S[this.state.p2]}> Add Customer</a>
        <a className = {S[this.state.p3]}> Customer List</a>
        <a className = {S[this.state.p4]}> Add Subscription</a>
        <a className = {S[this.state.p5]}> Base Station Map</a>
        <a className = {S[this.state.p6]}> Terms and Conditions</a>
        <a className = {S[this.state.p7]}> Link Code</a>
      </div>
    );
  }
}
