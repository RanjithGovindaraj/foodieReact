import React from 'react';
import '../css/inputComponent.css'

class InputComponent extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
                <div className="form-input">
                    <input name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={event => this.props.onChange(event)}/>
                </div>
        );
    }
}

export default InputComponent;