import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import {
  CLOSEACCOUNTMODAL,
  HELPFEEDBACKSCREEN,
  HOMESCREEN, LOGOUTMODAL, NEWPAYMENTSCREEN, NOTIFYEMAILSCREEN, PRIVARCYSECURITYSCREEN, PROFILEINFOSCREEN, SETTINGSSCREEN,
  SPLASHSCREEN, UPROFILESCREEN
} from './src/screens/screens'
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
            headerBackVisible: false,
          }} />
          <Stack.Screen component={UPROFILESCREEN} name={nvaStrings.UProfileScreen} />
          <Stack.Group >
            <Stack.Screen component={SETTINGSSCREEN} name={nvaStrings.SettingScreen} />
            <Stack.Screen component={PROFILEINFOSCREEN} name={nvaStrings.ProfileInfoScreen} />
            <Stack.Screen component={HELPFEEDBACKSCREEN} name={nvaStrings.HelpFeedScreen} />
            <Stack.Screen component={PRIVARCYSECURITYSCREEN} name={nvaStrings.PrivarcySecurityScreen} />
            <Stack.Screen component={NOTIFYEMAILSCREEN} name={nvaStrings.NotifyEmailScreen} />
          </Stack.Group>

          <Stack.Group screenOptions={{
            presentation: "transparentModal",
            headerShown: false
          }}>
            <Stack.Screen component={CLOSEACCOUNTMODAL} name={nvaStrings.CloseAccountModal} />
            <Stack.Screen component={LOGOUTMODAL} name={nvaStrings.LogoutModal} />
          </Stack.Group>

          <Stack.Screen component={NEWPAYMENTSCREEN} name={nvaStrings.NewpaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App