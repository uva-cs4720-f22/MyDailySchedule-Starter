# MyDailySchedule-Starter
Starter project for a React Native app for showing screen navigation

Make sure to install react-native and associated modules before trying to run:

`npm install react-native @react-navigation/native @react-navigation/native-stack`

`npm install react-native-screens react-native-safe-area-context`

-----

Day 2:

Using AsyncStorage to store our daily schedules!

`npm install @react-native-async-storage/async-storage`

* [https://reactnative.dev/docs/handling-text-input](https://reactnative.dev/docs/handling-text-input)
* [https://reactnative.dev/docs/intro-react#state](https://reactnative.dev/docs/intro-react#state)
* [https://react-native-async-storage.github.io/async-storage/docs/usage](https://react-native-async-storage.github.io/async-storage/docs/usage)

schedule.js
```
import React, {useEffect, useState} from "react";
import { View, Text, TextInput, Button, Alert } from 'react-native'
import styles from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Schedule = ({ navigation, route }) => {
    const currentTitle = route.params.dayToPrint + "'s Schedule";

    // Add some variables to save state
    // The one I used for the TextInput is below.  What should the schedule's be?
    const [text, setText] = useState('');


    // What should our storage key be?  Remember - we need a different schedule each day!
    const storageKey = ?????
    
    // useEffect is a React Hook and is called when the screen is mounted
    // It allows us to use dynamic information in key component locations
    useEffect(() => {
        getData();
        navigation.setOptions({ headerTitle: currentTitle });
    }, [route.params.dayToPrint]);

    
    // Add code in the functions below for storing the schedule and for loading the schedule on 
    // screen launch (in useEffect - I'm already calling it for you)
    const storeData = async (value) => {
        // See the guide above for what should go here
    }

    const getData = async () => {
        // See the guide above for what should go here
    }

    const handleAddEvent = () => {
        // What should you do when the add button is pressed?
    }

    const handleClearEvent = () => {
        // What should you do when the clear button is pressed?
    }

    return (
        <View style={{padding: 10}}>
            <Text>The schedule goes here!  Change this!</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Add something to your schedule."
                onChangeText={newText => setText(newText)}
                value={text}
            />
            <View style={styles.sectionContainer}>
                <Button
                title="Add"
                onPress={() => handleAddEvent()}
                />
            </View>
            <View style={styles.sectionContainer}>
                <Button
                title="Clear"
                onPress={() => handleClearEvent()}
                />
            </View>
        </View>
    )

}

export default Schedule;

```