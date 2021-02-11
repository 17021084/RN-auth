import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {ButtonLearnMore, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {
  state = {email: '', password: '', error: '', success: '', isLoading: false};

  onButtonPress() {
    const {email, password} = this.state;
    this.setState({error: '', success: '', isLoading: true});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({success: 'logged', isLoading: false});
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({success: 'Registed', isLoading: false});
          })
          .catch(() => {
            this.setState({error: 'Authentication failed', isLoading: false});
          });
      });
  }

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
          <Text style={{color: 'red'}}>{this.state.error}</Text>
        </CardSection>
        <CardSection>
          <Text style={{color: 'green'}}>{this.state.success}</Text>
        </CardSection>
        <CardSection>
          {this.state.isLoading ? (
            <Spinner size={'small'} />
          ) : (
            <ButtonLearnMore onPress={this.onButtonPress.bind(this)}>
              login
            </ButtonLearnMore>
          )}
        </CardSection>
      </Card>
    );
  }
}
