import { View, Text, Avatar, stylingProps} from 'native-base'
import React from 'react'

interface NameContainerProps {
  name?: String | undefined,
  color?: String | undefined,
}

const NameContainer = (props: NameContainerProps) => {

  const {color,name} = props

  return (
    <View>
      <Avatar
       backgroundColor={"amber.400"}
        
      >
        {name || "!"}
      </Avatar>
      
    </View>
  )
}

export default NameContainer