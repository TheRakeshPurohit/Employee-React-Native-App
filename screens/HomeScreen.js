import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList, Dimensions,List, Image} from 'react-native';
 
class HomeScreen extends Component {
     constructor(){
          super()
          this.state ={
               loading: false,
               dataSource: [],
               error: null,
               arrayholder: [],
          }
     }
     renderHeader = () => {    
          return (      
            <SearchBar        
              placeholder="Search"        
              lightTheme        
              round        
              onChangeText={text => this.searchFilterFunction(text)}
              autoCorrect={false}             
            />    
          );  
        };

        searchFilterFunction = text => {    
          const newData = this.arrayholder.filter(item => {      
            const itemData = `${item.name.title.toUpperCase()}   
            ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
            
             const textData = text.toUpperCase();
              
             return itemData.indexOf(textData) > -1;    
          });
          
          this.setState({ data: newData });  
        };

     makeRemoteRequest = () => {    
          const url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb';
          this.setState({ loading: true });
          
          fetch(url)      
            .then(res => res.json())      
            .then(res => {        
              this.setState({          
                data: res.results,          
                error: res.error || null,          
                loading: false,        
              });        
              
             this.arrayholder = res.results;      
           })      
           .catch(error => {        
             this.setState({ error, loading: false });      
           });  
        };

     renderItem = ({item}) =>{
          return(
          <View>
               <View>
                    <Text> Name: {item.first} {item.last} </Text>
                    <Text> Email: {item.email} </Text>
                    <Text> Address:{item.address} </Text>
                    <Text> Created: {item.created} </Text>
                    <Text> Balance: {item.balance} </Text>
               </View>
          </View>
          )
     }
     renderSeparator = () => {
          return(
               <View style={styles.separator}>
               </View>
          )
     }
     componentDidMount() {
          const url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb';
          fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
               this.setState({
                    dataSource: responseJson.results
               })
              console.warn(this.state.dataSource);
          })
          .catch((error) =>{
               console.warn(error)
          })
     };
  render() {
    return (
      <SafeAreaView>
        <View style={styles.screen}>
          <View style={styles.topView}>
               <Text> this is top View</Text>
          </View>
          <View style={styles.midView}>
               <Text> this is middle View</Text>
          </View>
          <View style={styles.bottomView}>
               <Text> this is bottomview View</Text>
               <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                    <FlatList
                         data={this.state.data}
                         renderItem={({ item }) => (
                              <Text>{item.first}</Text>
                              )}
                         keyExtractor={item => item.email}
                         ItemSeparatorComponent={this.renderSeparator}
                         ListHeaderComponent={this.renderHeader}
                    />
               </List>
          </View>   
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
     screen: {
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          flexDirection: "column",
     },
     topView: {
          flex: 0.1,
     },
     midView: {
          flex: 0.3,
     },
     bottomView: {
          flex: 1,
     },
     separator: {
          height: 1,
          width: '100%',
          backgroundColor: 'black',
     },
   });

export default HomeScreen;
