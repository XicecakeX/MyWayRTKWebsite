import React from 'react';
import S from './index.module.css';
import MyAccount from './MyAccount';
import AddCustomer from './AddCustomer';
import AddSubscription from './AddSubscription';
import SideNavigation from './Resources/UtilityComponents/SideNavigationBar';

export default class App extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      page: 2
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
        <div className = {S.background}>
          <img src = {require('./Resources/Images/background.png')} alt = "background"/>
        </div>
        <div className = {S.page}>
          <div className = {S.logo}>
            <img src = {require('./Resources/Images/logo.png')} alt = "logo"/>
          </div>
          <SideNavigation page = {this.state.page}/>
          <div className = {S.content}>
            {this.checkPage()}
          </div>
        </div>
      </div>
    );
  }
}
