import React,{useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Form = () => {
    const [characters, setCharacters] = useState([
        {value: 'Take A bath', key: 1},
        {value: 'Brush Teeth', key: 2},
        {value: 'Smile', key: 3} 
      ]);
      const [text, setText] = useState('');
const addTodo = () => {
    const todo = {
        value: text,
        key: characters.length + 1      
    }
    if(text !== ''){
    setCharacters(oldCharacters => [...oldCharacters, todo]);
    setText('');
    }
}
const FormInput = () => <View style={styles.Form}>
<TextInput placeholder="Enter Todo" style={styles.TodoInput} value={text} onChangeText={setText}  />
<View style={styles.Submit}>
<Button title="Submit" color={'purple'} onPress={addTodo}/>
</View>
    </View>
    return {characters, FormInput,setCharacters}
}

const styles = StyleSheet.create({
    Submit: {
        marginTop: 10
    },
Form: {
    marginVertical: 50
},
TodoInput :{
    borderBottomWidth: 2,
    width: 200,
    borderColor: 'white',
    textAlign: 'center' 
}
});

export default Form;