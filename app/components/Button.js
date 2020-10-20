import React from 'react'
import { View } from 'react-native'

const Button = (props) => {
  return (
    <>
        <View
            style={{ backgroundColor: 'red', width: 100, height: 50 }}
            onPress={() => {
				dispatch(UserReducer.actions.loginSaisie('email', 'password'));
			}}>
      </View>
    </>
  )
}
export default Button