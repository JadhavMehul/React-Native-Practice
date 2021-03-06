import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function GoalItem(props) {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: "#ccc",
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10,
    }
})