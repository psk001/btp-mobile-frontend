import { Link } from "expo-router";
import React from 'react';
import { ImageBackground, Text, Image , View} from 'react-native';

import styles from '../assets/styles';


export default function FinalVoteScreen(){
    return (
        <ImageBackground source={require("/home/psk/Desktop/btp-rn-frontend/off-vote/assets/t1.png")} style={styles.container}>
           <View style={styles.innerContainer}>
            <Text style={styles.header}> Mark Frank</Text>
                <Image source = {require('../assets/images/male-candidate.jpeg')}  />
                <Text >
                    <Text style={styles.field} >Name: </Text> 
                    <Text style={styles.description}> Mark Frank</Text>
                </Text>
                            
                <Link href= "/result">
                    <Text style={styles.LinkButton}>Vote</Text>
                </Link>  
           </View>
        </ImageBackground>
    )
}