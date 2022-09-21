import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
export const Focus = ({ addSubject }) => {
   const [subject, setSubject] = useState('');
   return (
      <View style={styles.container}>
         <View style={styles.inputContainer}>
            <TextInput
               style={styles.textInput}
               onChangeText={setSubject}
               label='What you like to focus on?'
            />
            <RoundedButton
               style={styles.button}
               title='+'
               size={50}
               onPress={() => addSubject(subject)}
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   textInput: {
      flex: 1,
      marginRight: spacing.sm,
   },
   inputContainer: {
      padding: spacing.lg,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
   },
   text: {
      color: colors.white,
   },
});
