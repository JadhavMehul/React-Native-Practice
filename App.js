import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />      
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (<GoalItem title={itemData.item.value} />)}
      />
        

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50, 
  },
});
