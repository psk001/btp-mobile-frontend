import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const LinkButton = ({ onPress, text, style, disabled }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={style}
      disabled={disabled}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
