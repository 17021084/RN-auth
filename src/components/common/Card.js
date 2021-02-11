import React from 'react';
import {View, Text} from 'react-native';

function Card(props) {
  const {cardContainer} = styles;
  return <View style={cardContainer}>{props.children}</View>;
}

const styles = {
  cardContainer: {
    paddingTop: 10,
    paddingBot: 10,
    borderWidth: 1,
    borderRadius: 2,
    border: 'dash',
    borderColor: '#fff',
    borderBottomWidth: 0,

    shadowOffset: {height: 0, width: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // đô cao. nếu có >2 thằng sibling đều cái shadow, thì cao hơn bóng to hơn
    elevation: 3,

    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
  },
};

export {Card};
