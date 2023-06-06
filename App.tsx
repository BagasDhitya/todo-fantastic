import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/screens/splash';
import Home from './src/screens/home';

const MainStack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name='Splash' component={Splash} options={{
          headerShown: false
        }} />
        <MainStack.Screen name='Home' component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App