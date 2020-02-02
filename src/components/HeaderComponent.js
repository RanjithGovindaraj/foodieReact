import React from 'react';
import '../css/header.css'
import '../css/all.min.css'

class HeaderComponent extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="header">
                <div className="header-content child">
                <img className="header-logo" src={this.props.logo} alt="logo" />
                <div className="user-name">
                    <span>Hello Ranjith</span>
                    <i className="user-icon fa fa-user-circle"></i>
                </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;