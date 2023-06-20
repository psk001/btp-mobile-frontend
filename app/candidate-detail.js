import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from '../assets/styles';

import { useNavigation } from '@react-navigation/native';
import LinkButton from '../assets/component/LinkButton';


export default function CandidateProfileScreen({route}){
    // console.log('route params: ', route.params)
    const navigation = useNavigation();

    const handlePress = () => {
     const otp= fetch('https://pskpr.pythonanywhere.com/user/api', {
      method: 'POST',
      body: JSON.stringify({
        mobile: '97415743592'
      })
    })
  
    // console.log(otp)
     // Navigate to a new page
     navigation.navigate('click-image');
  };

    return (
        <ImageBackground source={require("/home/psk/Desktop/btp-rn-frontend/off-vote/assets/t1.png")} style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.header}> Mark Frank</Text>
                <Image source = {require('../assets/images/male-candidate.jpeg')}  />
                <Text >
                    <Text style={styles.field} >Name: </Text> 
                    <Text style={styles.description}> Mark Frank</Text>
                </Text>

                <Text>
                    <Text style={styles.field}>Date of Birth:</Text>
                    <Text style={styles.description}>3 January 1988</Text>                
                </Text>
                
                <Text>
                    <Text style={styles.field}>Education:</Text>
                    <Text style={styles.description}> B.Tech - Computer Engineering</Text>
                </Text>
                
                <Text>
                    <Text style={styles.field}>About:</Text>
                    <Text style={styles.description}> Hardworking, Leadership Abilities</Text>
                </Text>

                <LinkButton style={styles.LinkButton} onPress={handlePress} text="Vote" />
            </View> 

        </ImageBackground>
    )
}
