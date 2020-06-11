import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, Text, Dimensions} from 'react-native';

class DetailScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.screen}>
          <Text>Hi</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: 'blue',
  },
});

export default DetailScreen;
