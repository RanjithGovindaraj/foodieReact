import React from 'react';
import '../css/foodItem.css'

class FoodItemComponent extends React.Component{
    constructor(){
        super();
    }

    render(){

        return(
            <div>
                <div className="item-container">
                            <h3 className="item">
                                {this.props.foodItem.name}
                            </h3>
                            <div className="description">
                                <div className="content">
                                    {this.props.foodItem.desc}
                                </div>
                                <div className="action">
                                    <button className="add-to-cart" onClick={()=>this.props.onClick}>ADD</button>
                                </div>
                            </div>
                            <div className="cost"><i className="fas fa-rupee-sign"></i>{this.props.foodItem.cost}</div>
                        </div>
            </div>
        );
    }
}

export default FoodItemComponent;