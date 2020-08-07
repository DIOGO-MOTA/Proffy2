import React from 'react';
import { View, ImageBackground, Text} from 'react-native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';



const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handlerNavigateBack() {
    goBack();
  }

  return (
  <View style={styles.container}>

    <ImageBackground 
    resizeMode="contain"
    source={giveClassesBgImage} style={styles.content}>
     
     <Text style={styles.title}>Quer ser um Proffy</Text>
     <Text style={styles.description}>
       Para começar, você precisa se cadastrar como professor na nossa plataforma web.
     </Text>

    </ImageBackground>

    <RectButton onPress={handlerNavigateBack} style={styles.okButton}>
      <Text style={styles.okButtonText}>Tudo Bem</Text>
    </RectButton>

  </View>
  
  );
}

export default GiveClasses;