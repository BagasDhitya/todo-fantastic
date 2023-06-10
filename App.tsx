import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/screens/splash';
import Login from './src/screens/login'
import Home from './src/screens/home';

const MainStack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name='Splash' component={Splash} />
        <MainStack.Screen name='Login' component={Login} />
        <MainStack.Screen name='Home' component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App