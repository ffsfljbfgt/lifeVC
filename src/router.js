import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './routes/HomePage/HomePage';
import ShopPage from './routes/ShopPage/ShopPage'
import LoginPage from './routes/LoginPage/LoginPage';
import DetailPage from './routes/DetailPage/DetailPage';
import CartPage from './routes/CartPage/CartPage';
import UserPage from './routes/UserPage/UserPage';
import CategoryPage from './routes/CategoryPage/CategoryPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginPage} />
        <Route path='/detail' component={DetailPage}/>
        <Route path='/cart' component={CartPage}/>
        <Route path='/user' component={UserPage}/>
        <Route path='/category' component={CategoryPage}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
