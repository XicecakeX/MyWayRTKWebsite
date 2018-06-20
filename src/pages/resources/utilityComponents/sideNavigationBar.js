import React from 'react';

export default class SideNavigation extends React.Component{
  /**Default Constructor*/
  constructor(data){
    super();
    //Checking page
    if(data.page === 1){
      //Setting state
      this.state = {
        p1: "side_nav_selected",
        p2: "side_nav",
        p3: "side_nav",
        p4: "side_nav",
        p5: "side_nav",
        p6: "side_nav",
        p7: "side_nav",
      };
    }else if(data.page === 2){
      //Setting state
      this.state = {
        p1: "side_nav",
        p2: "side_nav_selected",
        p3: "side_nav",
        p4: "side_nav",
        p5: "side_nav",
        p6: "side_nav",
        p7: "side_nav",
      };
    }else if(data.page === 3){
      //Setting state
      this.state = {
        p1: "side_nav",
        p2: "side_nav",
        p3: "side_nav_selected",
        p4: "side_nav",
        p5: "side_nav",
        p6: "side_nav",
        p7: "side_nav",
      };
    }else if(data.page === 4){
      //Setting state
      this.state = {
        p1: "side_nav",
        p2: "side_nav",
        p3: "side_nav",
        p4: "side_nav_selected",
        p5: "side_nav",
        p6: "side_nav",
        p7: "side_nav",
      };
    }else if(data.page === 5){
      //Setting state
      this.state = {
        p1: "side_nav",
        p2: "side_nav",
        p3: "side_nav",
        p4: "side_nav",
        p5: "side_nav_selected",
        p6: "side_nav",
        p7: "side_nav",
      };
    }else if(data.page === 6){
      //Setting state
      this.state = {
        p1: "side_nav",
        p2: "side_nav",
        p3: "side_nav",
        p4: "side_nav",
        p5: "side_nav",
        p6: "side_nav_selected",
        p7: "side_nav",
      };
    }else{
      //Setting state
      this.state = {
        p1: "side_nav",
        p2: "side_nav",
        p3: "side_nav",
        p4: "side_nav",
        p5: "side_nav",
        p6: "side_nav",
        p7: "side_nav_selected",
      };
    }
  }

  /**Rendering Webpage*/
  render(){
    return(
      <div className = "side_nav">
        <a className = {this.state.p1}> My Account</a>
        <a className = {this.state.p2}> Add Customer</a>
        <a className = {this.state.p3}> Customer List</a>
        <a className = {this.state.p4}> Add Subscription</a>
        <a className = {this.state.p5}> Base Station Map</a>
        <a className = {this.state.p6}> Terms and Conditions</a>
        <a className = {this.state.p7}> Link Code</a>
      </div>
    );
  }
}
