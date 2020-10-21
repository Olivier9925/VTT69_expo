import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import UserReducer from '@reducers/UserReducer'
import { useDispatch, useSelector } from 'react-redux'; 

const Button = () => {

	const dispatch = useDispatch();
  const [isPressedButton, setIsPressedButton] = useState(false) 

  return (
    <>
        <TouchableOpacity
          style={{ backgroundColor: 'red', width: 100, height: 50, borderRadius: 10 }}
          onPress={() => {
            dispatch(UserReducer.actions.loginSaisie('email', 'password'));
            setIsPressedButton(!isPressedButton)
          }
        }>
      <Text>{isPressedButton? 'Pressed' : 'unPresssed'}</Text>
      </TouchableOpacity>
    </>
  )
}
export default Button