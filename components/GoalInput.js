import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function GoalInput(props) {
    
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Course Goal" onChangeText={goalInputHandler} />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    )
}



const styles = StyleSheet.create({
    screen: {
      padding: 50, 
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    input: {
      width: "80%",
      borderColor: "black",
      borderWidth: 1,
      padding: 10
    },
    
  });
  