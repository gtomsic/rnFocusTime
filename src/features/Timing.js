import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
export const Timing = ({ onChangeTime, value }) => {
   return (
      <View style={styles.timingButton}>
         <RoundedButton
            size={75}
            title={value}
            onPress={() => onChangeTime(value)}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   timingButton: {
      flex: 1,
      alignItems: 'center',
   },
});
