import React from 'react';
import { StyleSheet, Text, View } from "react-native";
 
const Header = ({title}) => {
    return (
        <View style={styles.root}>
            <Text style={styles.fontSize}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        display: "flex",
        alignItems: "center",
        padding: 10
    },
    fontSize: {
        fontSize: 20
    }
  });
 
 export default Header;
 