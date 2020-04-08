import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText)
  }

  function addGoalHandler(){
    setCourseGoals([...courseGoals, enteredGoal])
  }

  return (
    <View 
    style={styles.screen}>
      {/* Main App View */}

      <View 
      style={styles.inputContainer}>
        {/* Text Input View */}
        <TextInput
        placeholder="What is your goal ?" 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal} />

        {/* Button View */}
        <Button 
        title="Add"
        onPress={addGoalHandler} />
      </View>
      <ScrollView style={styles.scrolly}>
         {courseGoals.map((goal)=>
         <View key={goal} style={styles.listItem}>
           <Text>{goal}</Text>
        </View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  listItem:{
    padding: '5%',
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: '3%',
    alignItems: 'center'
  },
  scrolly:{
    margin: '2%'
  }
});
