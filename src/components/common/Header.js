// import libraries
import React from 'react';
import {Text, View} from 'react-native';

//make component
const Header = (props) => {
  const {textStyle, viewStyles} = styles;
  return (
    <View style={viewStyles}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyles: {
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8a8f5',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {height: 0, width: 3},
    shadowOpacity: 0.7,
    elevation: 2,
    position: 'relative', // lam moc cho cac thang posision absolute khac
  },
};

//export
export {Header};
