import { NativeBaseProvider, Box, Text, VStack } from 'native-base'
import { SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HOMESCREEN, SPLASHSCREEN } from './src/screens/screens'
import { nvaStrings } from './src/utils/navStrings'

const Stack = createNativeStackNavigator();
const testString = null
const App = () => {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={testString || nvaStrings.Splashscreen}>
          <Stack.Screen component={SPLASHSCREEN} name={nvaStrings.Splashscreen} />
          <Stack.Screen component={HOMESCREEN} name={nvaStrings.Homescreen} options={{
            headerBackVisible:false,
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App