import React from 'react';
import MyAccount from './myAccount/myAccount';
import AddCustomer from './addCustomer/addCustomer';
import AddSubscription from './addSubscription/addSubscription';
import SideNavigation from './resources/utilityComponents/sideNavigationBar';
import './resources/css/styles.css';

export default class App extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      page: 4
    };
  }

  /**checkPage Function*/
  checkPage = () => {
    //Declaring fields
    var pageID = this.state.page;
    var page;

    //Checking page
    if(pageID === 1){
      //Setting page
      page = (<MyAccount />);
    }else if(pageID === 2){
      //Setting page
      page = (<AddCustomer />);
    }else if(pageID === 3){
      //Setting page

    }else if(pageID === 4){
      //Setting page
      page = (<AddSubscription />);
    }else if(pageID === 5){
      //Setting page

    }else if(pageID === 6){
      //Setting page

    }else{
      //Setting page

    }

    //Returning page
    return page;
  }

  /**Rendering Webpage*/
  render(){
    return(
      <div>
        <div className = "background">
          <img src = {require('./resources/images/background.png')} alt = "background"/>
        </div>
        <div className = "content">
          <SideNavigation page = {this.state.page}/>
          <div className = "pageContent">
            {this.checkPage()}
          </div>
        </div>
      </div>
    );
  }
}
