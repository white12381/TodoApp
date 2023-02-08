import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {

    return <View style={style.headerVeiw}>
        <Text style={style.TextHeader}>Todo App</Text>
    </View>
}

const style = StyleSheet.create({
    headerVeiw: {
         backgroundColor: 'purple',
         width: '100%',
         height: 34,
         padding: 6,
        marginBottom: 50
    },
    TextHeader: {
        textAlign: 'center',
        fontSize: 16,
        fontStyle: 'bold',
        color: 'white',
    } 
})

export default Header;