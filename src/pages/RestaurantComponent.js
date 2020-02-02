import React from 'react';
import '../css/restaurantStyle.css'
import '../css/header.css'
import '../css/all.min.css'
import logoWhite from '../res/images/logoWhite.png'
import restaurantImage from '../res/images/restaurant.jpg'
import HeaderComponent from '../components/HeaderComponent'
import RestaurantCard from '../components/RestaurantCard'
import RestaurantService from '../util/RestaurantService';

class RestaurantComponent extends React.Component{
    
    constructor(){
        super();
        this.state = {
            restaurantList:[]
        }
    }
    componentWillMount(){
        this.setState(
            {restaurantList : RestaurantService.readFromJSONfile()
        });
    }

    printlist(){
        let arrayOfCards = []
        for(let item of this.state.restaurantList){
            arrayOfCards.push(<RestaurantCard restaurant = {item} navigation={this.props.history}/>)
        }
        return arrayOfCards;
    }
    
    
    render(){
        return(
            <div className="restaurant-list-container">
            <HeaderComponent logo={logoWhite}/>
        <div className="restaurant-list-wrapper child">
            {this.printlist()}    
        </div>
    </div>
            
        );
    }
    
}

export default RestaurantComponent;
