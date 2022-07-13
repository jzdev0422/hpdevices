 import React from 'react';
 import {
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 import { Header, Navbar } from '../components';
 
 const Home = ({navigation}) => { 
   return (
    <View style={styles.root}>
      <View style={styles.main}>
          <Navbar navigation={navigation} />
          <View style={styles.container}>
            <Header title="Home" />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>      
      </View>
    </View>
   );
 };
 
 const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row"
  },
  main: {
    flex: 1,
    flexDirection: "row"
  },
  container: {
    flex: 1,
    padding: 5
  }
 });
 
export default Home;
 