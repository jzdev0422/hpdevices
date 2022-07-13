import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
const Navbar = ({navigation}) => {
    const [hide, setHide] = useState(true)
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.item}><Feather name="menu" color="black" size={20} onPress={() => setHide(!hide)} /></Text>
            <Text style={styles.item} onPress={() => navigation.push('Home')}><SimpleLineIcons name="home" size={20} color="black" />{!hide && " Home"}</Text>
            <Text style={styles.item} onPress={() => navigation.push('Drivers')}><Feather name="printer" size={20} color="black" />{!hide && " Drivers"}</Text>
            <Text style={styles.item} onPress={() => navigation.push('Printers')}><Feather name="hard-drive" size={20} color="black" />{!hide && " Printers"}</Text>
            <Text style={styles.item} onPress={() => navigation.push('Test')}><Ionicons name="add-circle-outline" size={20} color="black" />{!hide && " Add More"}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "grey",
      padding: 10
    },
    item: {
        fontSize: 15,
        padding: 3
    }
  });
 
 export default Navbar;
 