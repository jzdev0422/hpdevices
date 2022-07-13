import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
const Header = ({navigation}) => {
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.fontSize}><Feather name="menu" color="black" size={20} /></Text>
            <Text style={styles.fontSize}><SimpleLineIcons name="home" size={20} color="black" onPress={() => navigation.push('Home')} /> Home</Text>
            <Text style={styles.fontSize}><Ionicons name="add-circle-outline" size={20} color="black" onPress={() => navigation.push('Printers')} /> Printers </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "column"
    },
    fontSize: {
        fontSize: 20
    }
  });
 
 export default Header;
 