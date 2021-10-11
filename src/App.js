import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';

import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Privateroute from './components/privateroute/Privateroute';
import Login from './components/register/login';
import Shipping from './components/shipping/Shipping';
import Shop from './components/Shop/Shop';
import Authprovider from './context/Authprovider';
import Register from './rgs/Register';

function App() {
  return (
    <div>
     <Authprovider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Privateroute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Privateroute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Privateroute path='/shipping'>
<Shipping></Shipping>
          </Privateroute>
          <Route to="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

     </Authprovider>
    </div>
  );
}

export default App;
