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
import { Timer } from './src/features/Timer';

import { colors } from './src/utils/colors';

export default function App() {
   const [currentSubject, setCurrentSubject] = useState('test');
   return (
      <SafeAreaView style={styles.container}>
         {!currentSubject ? (
            <Focus addSubject={setCurrentSubject} />
         ) : (
            <Timer
               focusSubject={currentSubject}
               onTimerEnd={(e = {})}
               clearSubject={(e = {})}
            />
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
