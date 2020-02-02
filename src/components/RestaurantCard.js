import React from 'react';
import '../css/restaurantCard.css'


class RestaurantCard extends React.Component{
    constructor(){
        super();
        
    }

    render(){
        
        return(
            <div className="restaurant-card" id={this.props.restaurant.id} onClick={()=>this.props.navigation.push("/orders/"+this.props.restaurant.id)}>
                <img className="restaurant-logo" src={this.props.restaurant.image} alt="restaurant pic" />
                <div className="restaurant-name wrap-text">{this.props.restaurant.name}</div>
                <div className="restaurant-desc wrap-text">{this.props.restaurant.address}</div>
                <div className="restaurant-location">
                    <i className="fas fa-map-marker-alt"></i>
                <span className="distance">{this.props.restaurant.location}</span>
                </div>
                <div className="restaurant-review">
                    {this.props.restaurant.reviews} reviews
                </div>
            </div>
 
        );
    }
}

export default RestaurantCard;