import React from 'react';
import '../css/orderItem.css'

class OrderItemComponent extends React.Component{
        constructor(){
            super();
        }

        render(){
            return(
                <div className="item-container dim">
                        <div className="item-title">
                            Chicken 65 Biryani
                        </div>
                        <div className="item-content">
                            <div className="content-left spinner">
                                <span>
                                    <button onclick="decrement(event,'item0')">-</button>
                                </span>
                                <span><input type="text" id="item0" value="1" /></span>
                                <span>
                                    <button onclick="increment(event,'item0')">+</button>
                                </span>
                            </div>
                            <div className="content-right cost">
                                <i className="fas fa-rupee-sign"></i>
                                <span id="item0Cost" data="240">240</span>
                            </div>
                        </div>
                    </div>
            );
        }
}

export default OrderItemComponent;