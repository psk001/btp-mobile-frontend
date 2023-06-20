import React , { useState, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { SectionList } from 'react-native';

import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import LinkButton from '../assets/component/LinkButton';

import styles from '../assets/styles';


const lokSabhaCandidateData= [{
  type: 'Candidate List',
  data: [
    {
      id: 1,
      name: '       Anne Moung'
    },
    {
      id: 2,
      name: '       Mark Frank'
    },
    {
      id: 3,
      name: '       Peg Legge'
    }
  ]
}]

export default function LokSabhaListScreen({route}) {
  console.log('election id of candidates: ', route)
  const [buttonPressed, setButtonPressed] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://pskpr.pythonanywhere.com/user/candidate')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  const navigation = useNavigation();

  const handlePress = (candidateId) => {
    console.log('candidateId to fetch: ', candidateId)
    setButtonPressed(candidateId)

    // Navigate to a new page
    navigation.navigate('candidate-detail', {'candidateId': candidateId});
  }
// };


  return (
    <ImageBackground source={require("/home/psk/Desktop/btp-rn-frontend/off-vote/assets/t1.png")} style={styles.container}>
        <View style={styles.innerContainer}>
        <SectionList
                sections={[...lokSabhaCandidateData]}
                
                renderItem={({item})=>(                   
                    <LinkButton style={styles.taskItem} onPress={() => handlePress(item.id)} text={item.name} />
                )}

                renderSectionHeader={({section})=>(
                    <Text style={styles.taskTitle}>{section.type}</Text>
                )}

                keyExtractor={item=>item.id}
            />
        </View>
    </ImageBackground>
  );
}

