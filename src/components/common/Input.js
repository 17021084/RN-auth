import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function Input({label, value, onChangeText, placeholder, secureTextEntry}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label ? label : 'Label'}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false} // Auto fix miss spell will be disable
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    color: 'green',
  },
  input: {
    flex: 2,
    height: 30,
    width: null,
    marginLeft: 10,
    borderColor: 'black',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 30,
  },
});
export {Input};
