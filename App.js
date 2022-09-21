import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   SafeAreaView,
   Platform,
   StatusBar,
} from 'react-native';
import { Focus } from './src/features/Focus';
import { colors } from './src/utils/colors';

export default function App() {
   const [currentSubject, setCurrentSubject] = useState('');
   return (
      <SafeAreaView style={styles.container}>
         {!currentSubject ? (
            <Focus addSubject={setCurrentSubject} />
         ) : (
            <View>
               <Text style={{ color: colors.white }}>
                  Rendering Timer here {currentSubject}
               </Text>
            </View>
         )}
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: colors.primary,
   },

   text: {
      color: colors.white,
   },
});
