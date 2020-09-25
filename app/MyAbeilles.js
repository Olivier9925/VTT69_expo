import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

const MyAbeilles = () => {
    const isConnected = useSelector(state => state.userReducer.isConnected);

    const windowWidth = Dimensions.get('window').width;

    return (
        <View>
            {isConnected ? <Text>MyAbeilles coucou</Text> : <></>}
        </View>
    );
}
export default MyAbeilles;