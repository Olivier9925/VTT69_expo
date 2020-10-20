import React from 'react'
import { View, Text } from 'react-native'
import Button from '@components/Button'

const TrackCard = (props) => {
  return (
    <>
      <View>
        <Text>
          Nom de la trace
        </Text>
        <View>
          <Button />
        </View>
      </View>
    </>
  )
}
export default TrackCard