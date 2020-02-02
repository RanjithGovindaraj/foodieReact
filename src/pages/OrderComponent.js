import React from 'react';
import '../css/orderStyle.css';
import logoWhite from '../res/images/logoWhite.png';
import HeaderComponent from '../components/HeaderComponent'
import FoodItemComponent from '../components/FoodItemComponent';
import OrderItemComponent from '../components/OrderItemComponent';
import RestaurantService from '../util/RestaurantService';

class OrderComponent extends React.Component{
    constructor(){
        super();
        this.state={
            foodList:[],
            orderlist:[]
        }
    }

    componentWillMount(){
        console.log("Hello");   
        this.setState(
            {foodList : RestaurantService.readFoodFromJSONfile(this.props.match.params.id),
                //  hotelName:this.state.foodList.hotelName
        });
    }

    printFoodList(){
        let arrayOfCards = []
        for(var item of this.state.foodList){
            arrayOfCards.push(<FoodItemComponent foodItem = {item} onclick={this.addToOrder}/>)
        }
        return arrayOfCards;
    }
    
    render(){
        return(
            <div className="main-container order-page">
            <HeaderComponent logo={logoWhite}/>
        <div className="order">
            <div className="items">
                <div className="restaurant">
                    <div className="child">
                        <h1 className="title">{this.state.hotelName}</h1>
                        <div className="address">
                        {this.state.hotelAddress}
                        </div>
                        <div className="address">
                           Perundurai ,Erode
                        </div>
                    </div>
                </div>
                <div className="order-items">
                    <div className="child">
                        <h1 className="title">Order Now</h1>
                       
                       {this.printFoodList()}
                    </div>
                </div>
            </div>
            <div className="my-cart">
                <form className="order-form" action="">
                    <h3 className="title">My Cart</h3>

                   {this.orderlist}
                    {/* <OrderItemComponent/> */}
                    
                    
                    <div className="total-container">
                        <div className="item-content">
                            <div className="content-left">Sub Total</div>
                            <div className="content-right">
                                <i className="fas fa-rupee-sign"></i> 440
                            </div>
                        </div>
                        <div className="item-content dim">
                            <div className="content-left">Delivery Charges</div>
                            <div className="content-right">55</div>
                        </div>
                        <div className="item-content dim">
                            <div className="content-left">Coupon (SUPER)</div>
                            <div className="content-right">-150</div>
                        </div>
                        <div className="item-content">
                            <div className="content-left">Grand Total</div>
                            <div className="content-right">
                                <i className="fas fa-rupee-sign"></i> 335
                            </div>
                        </div>
                    </div>
                    <div className="form-field">
                        <button className="app-button" type="submit">PAY NOW</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        );
    }
    
}
export default OrderComponent;