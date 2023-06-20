import { Link } from "expo-router";
import { View, Text, ImageBackground } from 'react-native';


import styles from '../assets/styles'

export default function Profile() {
  return (
    <ImageBackground source={require("/home/psk/Desktop/btp-rn-frontend/off-vote/assets/home.png")} style={styles.container}>
      {/* highlight-next-line */}
      <Link href="/login"> 
        <Text style={styles.taskTitle} >
            Proceed to Vote !
        </Text>    
      </Link>
    </ImageBackground>
  );
}


