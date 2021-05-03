import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcomescreen from './pagescreen/screens/welcomescreen';
import Secreen1  from './pagescreen/screens/secreen1';
import Secreen2  from './pagescreen/screens/secreenimage1';
import Secreen22  from './pagescreen/screens/secreenimage2';
import Secreen3  from './pagescreen/screens/secreenimage3';
import Secreen4  from './pagescreen/screens/secreenimage4';
import Secreen5  from './pagescreen/screens/secreenimage5';
import Secreen6  from './pagescreen/screens/secreenimage6';

const AuthoStack = createStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
        <AuthoStack.Navigator headerMode="none">
            <AuthoStack.Screen name="Welcome" component={Welcomescreen} />
            <AuthoStack.Screen name="page1" component={Secreen1} />
            <AuthoStack.Screen name="page2" component={Secreen2} />
            <AuthoStack.Screen name="page22" component={Secreen22} />
            <AuthoStack.Screen name="page3" component={Secreen3} />
            <AuthoStack.Screen name="page4" component={Secreen4} />
            <AuthoStack.Screen name="page5" component={Secreen5} />
            <AuthoStack.Screen name="page6" component={Secreen6} />
        </AuthoStack.Navigator>
      </NavigationContainer>
    );
  }
