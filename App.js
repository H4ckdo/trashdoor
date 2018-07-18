import React from 'react';
import Home from "./client/components/home";
import Login from "./client/components/login";
import {createStackNavigator} from "react-navigation";

const App = createStackNavigator({
  Login: {screen: Login},
  home: {screen: Home},
});

export default App; 