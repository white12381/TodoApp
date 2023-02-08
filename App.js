import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './Components/header';
import Form from './Components/Form';

export default function App() { 
  const {characters, FormInput, setCharacters} = Form();
  const touchable = (key) => {
        setCharacters(characterss => characterss.filter((char) => key !== char.key))
    }
  return ( 
    <View style={styles.container}>
      <Header /> 
      <FormInput />
      <StatusBar style="auto" /> 
    <FlatList numColumns={1} data={characters} renderItem={({item}) =>
     ( <Text style={styles.todoList}>
      <Text style={styles.listStyle}> {item.value} </Text> 
     <TouchableOpacity onPress={() => touchable(item.key)} style={styles.X}> <Text> X </Text> </TouchableOpacity>
     </Text>
     )} />
    </View>
  );
}

const styles = StyleSheet.create({
  X:{
    backgroundColor: 'red',
    borderStyle: 'dashed',
    color: 'white'
  },
  todoList:{
    margin: 20,
    padding: 10,
    width: '100%',
    textAlign: 'center'
  },
  listStyle: { 
    textAlign: 'center',
    fontSize: 10,
    padding: 5,  
    color: 'white',
    fontStyle: 'bold',
    backgroundColor: 'purple',
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: 'white',
  }, 
  demo: {
    color: 'black', 
    alignItems: 'center',
    fontWeight: 'bold'
  },
  textInput: {
    borderColor: 'white',
    borderWidth: 20,
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
});
