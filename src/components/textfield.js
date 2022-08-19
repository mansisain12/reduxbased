import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const TxtComponent = props => {
  let {defaultValue, onChangeText, placeholder} = props;

  return (
    <View>
      <TextInput
        style={styles.userinput}
        defaultValue={defaultValue}
        editable={true}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  userinput: {
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
});
export default TxtComponent;
