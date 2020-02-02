import React from 'react';
import './App.css';
import LoginComponent from './pages/LoginComponent';
import RestaurantComponent from './pages/RestaurantComponent';
import OrderComponent from './pages/OrderComponent';
import {BrowserRouter,Route} from "react-router-dom";


function App() {
  return (
     //<LoginComponent/>
    //  <RestaurantComponent/>
      //<OrderComponent/>
    <BrowserRouter>
      <Route exact path={'/'} component={LoginComponent}/>
      <Route exact path={'/restaurants'} component={RestaurantComponent}/>
      <Route exact path={'/orders/:id'} component={OrderComponent}/>
    </BrowserRouter>
  );
}

export default App;
