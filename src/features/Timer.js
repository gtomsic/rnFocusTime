import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Countdown } from '../components/Countdown';

export const Timer = ({ focusSubject }) => {
   return (
      <View style={styles.container}>
         <View style={styles.countdown}>
            <Countdown isPaused onProgress={() => {}} onEnd={() => {}} />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   countdown: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
   },
});
