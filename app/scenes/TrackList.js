import React from 'react'
import { Text } from 'react-native'
import TrackCard from '@components/TrackCard'
import { useSelector } from 'react-redux';

const TrackList = () => {

    const connexion = useSelector(state => state.UserReducer.connexion)
    return (
        <>
            <TrackCard />
            <Text>{connexion? 'Connecté' : 'pas connecté'}</Text>
        </>
    )
}
export default TrackList