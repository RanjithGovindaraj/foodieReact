import mockData from '../res/data/mockData.json';

class RestaurantService {
    static readFromJSONfile(){    
        var resFromFile = mockData;
        var restaurantList = [];
        for(let currentItem of resFromFile){
            let object = {
                id:currentItem.id,
                name:currentItem.name,
                address:currentItem.address,
                reviews:currentItem.reviews,
                image:currentItem.feature_image
            }
            restaurantList.push(object);
        }
        return restaurantList;
    }
    static readFoodFromJSONfile(i){
        var resFromFile = mockData;
        var menuList = [];
        for(let Hotel of resFromFile){
            if(i==Hotel.id){
        for(let currentItem of Hotel.menu){
            let obj={id:currentItem.id,
                name:currentItem.name,
                desc:currentItem.desc,
                price:currentItem.price,
                hotelName:Hotel.name,
                hotelAddress:Hotel.address
                }
            menuList.push(obj);
            }  
        }
    }
        return menuList;
    }
}

// let obj={id:currentItem.menu.id,
//     name:currentItem.menu.name,
//     desc:currentItem.menu.desc,
//     price:currentItem.menu.price
//     }

export default RestaurantService;