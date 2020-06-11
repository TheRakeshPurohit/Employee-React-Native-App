import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {Input} from 'react-native-elements';

class NewUser extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.screen}>
          <Text>Add New Employee</Text>
          <Input placeholder="Enter Employee First Name" />
          <Input placeholder="Enter Employee Last Name" />
          <Input placeholder="Enter Employee Email" />
          <Input placeholder="Enter Employee Address" />
          <Input placeholder="Enter Employee Balance" />
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
