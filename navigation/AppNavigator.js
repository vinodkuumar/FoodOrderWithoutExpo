import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {ShopNavigator,AuthNavigator,MainShopNavigator} from './ShopNavigator';
import StartupScreen from '../screens/StartupScreen';

const AppNavigator = props => {
  const isAuth = useSelector(state => !!state.auth.token);
 

  return (
    <NavigationContainer>
      {isAuth && <ShopNavigator />}
      {/* {!isAuth  && <AuthNavigator />} */}
      {/* {!isAuth  && <StartupScreen />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;

