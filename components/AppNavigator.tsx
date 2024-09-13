import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from './Homescreen';
import subscribe from './subscribe';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Homescreen} options={{headerShown:false}} />
            <Stack.Screen name="subscribe" component={subscribe} options={{headerTitle:"PolarWeb.io", headerTitleAlign: "center", headerTransparent:"True"}}/>
        </Stack.Navigator>
    );
};

export default AppNavigator;    