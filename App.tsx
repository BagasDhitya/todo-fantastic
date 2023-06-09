import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./src/screens/splash";
import Register from "./src/screens/register";
import Login from "./src/screens/login";
import Home from "./src/screens/home";
import Setting from "./src/screens/setting";
import ListTask from "./src/screens/list_task";

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Splash" component={Splash} />
        <MainStack.Screen name="Register" component={Register} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Setting" component={Setting} />
        <MainStack.Screen name="ListStack" component={ListTask} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
