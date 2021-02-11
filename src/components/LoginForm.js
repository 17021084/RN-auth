import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {ButtonLearnMore, Card, CardSection, Input} from './common';

export default class LoginForm extends Component {
  state = {email: '', password: ''};
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'email@gmail.com'}
            label={'Email'}
            value={this.state.email}
            onChangeText={(email) => this.setState({email: email})}
          />
        </CardSection>
        <CardSection>
          <Input
            label={'Password'}
            placeholder={'12312312z'}
            secureTextEntry
            value={this.state.password}
            onChangeText={(password) => this.setState({password: password})}
          />
        </CardSection>
        <CardSection>
          <ButtonLearnMore>login</ButtonLearnMore>
        </CardSection>
      </Card>
    );
  }
}
