import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TrackList from '@scenes/TrackList'
import { TextsConstants, ColorsConstants } from '@constants'

const MyVTT69 = () => {
    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={{ fontSize: 20 }}>{TextsConstants.APP_TITLE}</Text>
            </View>
            <TrackList />
        </>
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