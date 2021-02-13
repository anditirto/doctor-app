import React,{useState} from 'react'
import {YellowBox} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router'
import FlashMessage from "react-native-flash-message";
import {Loading} from './components'
import {Provider,useSelector} from 'react-redux'
import store from './redux'


 const MainApp = () => {
   const [loading, setLoading] = useState(false)
   const stateGlobal = useSelector(state => state)
  YellowBox.ignoreWarnings(['Setting a timer'])

   console.log('state Global : ', stateGlobal)
  

  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
       <FlashMessage position="top" />
       {stateGlobal.Loading && <Loading />}
    </>
  )
}

const App = () => {
    return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App;

