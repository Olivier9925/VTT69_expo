import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TrackList from '@scenes/TrackList'
import { TextsConstants, ColorsConstants } from '@constants'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../ReactotronConfig';
import rootSaga from './sagas';
import reducers from './reducers';

let sagaMiddleware;

const sagaMonitor = Reactotron.createSagaMonitor();
sagaMiddleware = createSagaMiddleware({ sagaMonitor })
const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()));

sagaMiddleware.run(rootSaga);

const MyVTT69 = () => {
    return (
        
        <Provider store={store}>
            <View style={styles.titleContainer}>
                <Text style={{ fontSize: 20 }}>{TextsConstants.APP_TITLE}</Text>
            </View>
            <TrackList />
        </Provider>
    );
}

export default MyVTT69;

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: ColorsConstants.PRIMARY100
    },
});