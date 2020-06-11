import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import {Input} from 'react-native-elements';

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      st_eMail: null,
    };
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.screen}>
          <Text>Add New Employee</Text>
          <Input placeholder="Enter Employee First Name" />
          <Input placeholder="Enter Employee Last Name" />
          <Input
            placeholder="Enter Employee Email"
            keyboardType="email-address"
          />
          <Input
            placeholder="Enter Employee Address"
            onChangeText={value => this.setState({st_eMail: value})}
            value={this.state.st_eMail}
          />
          <Input placeholder="Enter Employee Balance" />
          <Button
            title="Show Employee Detail"
            onPress={() =>
              this.props.navigation.navigate('Detail', {
                name: Math.floor(Math.random() * 100),
              })
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
});

export default NewUser;
