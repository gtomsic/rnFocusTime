import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
   1 * ONE_SECOND_IN_MS,
   1 * ONE_SECOND_IN_MS,
   1 * ONE_SECOND_IN_MS,
   1 * ONE_SECOND_IN_MS,
   1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject }) => {
   const [isStarted, setIsStarted] = useState(false);
   const [progress, setProgress] = useState(1);
   const [minutes, setMinutes] = useState(0.1);
   return (
      <View style={styles.container}>
         <View style={styles.countdown}>
            <Countdown
               minutes={minutes}
               isPaused={!isStarted}
               onProgress={setProgress}
               onEnd={() => Vibration.vibrate(PATTERN)}
            />
            <View style={{ paddingTop: spacing.xxl }}>
               <Text style={styles.title}>Focusing on:</Text>
               <Text style={styles.task}>{focusSubject}</Text>
            </View>
         </View>
         <View style={{ paddingTop: spacing.sm }}>
            <ProgressBar
               progress={progress}
               color={colors.secondary}
               style={{ height: spacing.sm }}
            />
         </View>
         <View style={styles.timingWrapper}>
            <Timing onChangeTime={setMinutes} value={10} />
            <Timing onChangeTime={setMinutes} value={15} />
            <Timing onChangeTime={setMinutes} value={25} />
         </View>
         <View style={styles.buttonWrapper}>
            {!isStarted ? (
               <RoundedButton
                  title='Start'
                  onPress={() => setIsStarted(true)}
               />
            ) : (
               <RoundedButton
                  title='Pause'
                  onPress={() => setIsStarted(false)}
               />
            )}
         </View>
         <View style={styles.timingWrapper}>
            <RoundedButton title='-' size={50} onPress={clearSubject} />
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
   timingWrapper: {
      flex: 0.1,
      flexDirection: 'row',
      padding: spacing.md,
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonWrapper: {
      flex: 0.3,
      flexDirection: 'row',
      padding: spacing.md,
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      color: colors.white,
      fontWeight: 'bold',
      textAlign: 'center',
   },
   task: {
      color: colors.white,
      textAlign: 'center',
   },
});
