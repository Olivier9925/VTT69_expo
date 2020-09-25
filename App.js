import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import MyAbeilles from './app/MyAbeilles';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './app/sagas';
import reducers from './app/reducers';
import Reactotron from './ReactotronConfig';
import { NavigationContainer } from '@react-navigation/native';

let sagaMiddleware;

const sagaMonitor = Reactotron.createSagaMonitor();
sagaMiddleware = createSagaMiddleware({ sagaMonitor })
const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()));

const App = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar style="auto" />
        <Provider store={store}>
          <NavigationContainer>
            <MyAbeilles />
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </>
  );
}
export default App;