import React from 'react';
import '../css/buttonComponent.css'

class ButtonComponent extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
                <div divClassName={this.props.divClassName}>
                    <button className={this.props.className} type={this.props.type} onClick={this.props.onClick}>{this.props.innerHTML}</button>
                </div>
        );
    }
}

export default ButtonComponent;