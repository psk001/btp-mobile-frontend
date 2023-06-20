import { Link } from "expo-router";
import React , { useState, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { SectionList } from 'react-native';
import styles from '../assets/styles';

import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import LinkButton from '../assets/component/LinkButton';


const localElectionData= [{
    electionName: 'Local Elections',
    data: [
        {
            id: 1,
            name: '       Municipal Cooperation Of Delhi'
        }
    ]
}]

const stateElectionData= [{
    electionName: 'State Elections',
    data: [
        {
            id: 2,
            name: '       Assembly Elections - Delhi 2022'
        },
        {
            id: 3,
            name: '       Legislative Council Elections'
        }
    ]
}]


const nationalElectionData= [{
    electionName: 'Lok Sabha Elections',
    data: [
        {
            id: 4,
            name: '      Lok Sabha Elections 2024'
        }
    ]
}]


export default function ElectionListScreen() {
    const [buttonPressed, setButtonPressed] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://pskpr.pythonanywhere.com/user/election')
          .then(response => setData(response.data))
          .catch(error => console.log(error));
      }, []);

    const navigation = useNavigation();

    const handlePress = (electionId) => {
      console.log('electionId to fetch: ', electionId)
      setButtonPressed(electionId)
      // Navigate to a new page
      navigation.navigate('candidate-list', {'electionId': electionId});
    }



  return (
    <ImageBackground source={require("/home/psk/Desktop/btp-rn-frontend/off-vote/assets/t1.png")} style={styles.container}>
        <View style={styles.innerContainerBig}>
            <SectionList
                sections={[...localElectionData, ...stateElectionData, ...nationalElectionData]}
                
                renderItem={({item})=>(
                    <LinkButton style={styles.taskItem} onPress={()=> handlePress(item.id)} text={item.name} />
                )}

                renderSectionHeader={({section})=>(
                    <Text style={styles.taskTitle}>{section.electionName}</Text>
                )}

                keyExtractor={item=>item.id}
            />
        </View>
    </ImageBackground>
  );
}