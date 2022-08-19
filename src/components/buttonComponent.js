import React from 'react';
import {View, Button} from 'react-native';

const BtnComponent = props => {
  let {title, onPress, disabled} = props;
  return (
    <View>
      <Button title={title} 
      disabled={disabled}
      onPress={onPress} />
    </View>
  );
};
export default BtnComponent;
