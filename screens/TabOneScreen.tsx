import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',

      
    }}>
    <View style={{
      height: '10%',
      width: '80%',
      backgroundColor: '#43BFC7',
      borderWidth:1,
      borderRadius: 25,
      
    }}>
      <Text style={{
      margin: 15,
      }}>Username
      </Text>

    </View>
    <View style={{
      height: '5%',
      width: '30%',
      backgroundColor: '#FFFFFFC0',
    }}>
    </View>
    <View style={{
      height: '10%',
      width: '80%',
      backgroundColor: '#43BFC7',
      borderWidth: 1,
      borderRadius: 25
    }}>
      <Text style={{
      margin: 15,
      }}>Password                                              View
      </Text>
    </View>
    <View style={{
      height: '5%',
      width: '80%',
      backgroundColor: '#FFFFFFC0',
    }}>
       <Text style={{
        color: 'blue',
        textDecorationLine: 'underline'
      }}>Forgot Password?
      </Text>
    </View>
    <View style={{
      height: '10%',
      width: '30%',
      backgroundColor: '#43BFC7',
      borderRadius: 25
    }}>
      <Text style={{
        color: 'black',
      margin: 20,
      textAlign: 'center'
      }}>Login
      </Text>
    </View>
    <Text style={{
        color: 'black',
      margin: 20,
      textAlign: 'center'
      }}>--------------------------------------or--------------------------------------
      </Text>
      <View style={{
      height: '5%',
      width: '30%',
      backgroundColor: '#FFFFFFC0',
    }}>
    </View>
    <View style={{
      height: '10%',
      width: '30%',
      backgroundColor: 'white',
      borderWidth:1,
      borderRadius: 25,
    }}>
       <Image  source={{uri: 'https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png'}}
       style = {{
         height: '80%',
         width: '100%',
         resizeMode: "contain"
       }}
       />
    </View>
    <Text style={{
        color: 'black',
      textAlign: 'center'
      }}> Continue With Facebook
      </Text>
      
      <View style={{
      height: '10%',
      width: '30%',
      backgroundColor: 'white',
      borderWidth:1,
      borderRadius: 25,
    }}>
       <Image
       source={{uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'}}
       style = {{
         height: '75%',
         width: '100%',
         resizeMode: "contain"
       }}
       
       />
    </View>
    <Text style={{
        color: 'black',
      textAlign: 'center'
      }}> Continue With Google
      </Text>
    </View>
  );
}