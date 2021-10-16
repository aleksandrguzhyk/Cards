import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Buttons = ({ onPress }) => {
  return (
    <View style={styles.buttonsContainer}>
      <Text style={styles.buttonsTitle}>Next card will be:</Text>
      <View style={styles.buttonsWpapper}>
        <Pressable
          onPress={onPress}
          style={styles.button}
        >
          <Text style={{ fontWeight: 'bold' }}>a lower</Text>
        </Pressable>
        <Pressable
          onPress={onPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>a higher</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonsTitle: {
    fontSize: 20,
    fontWeight: '800',
  },
  buttonsWpapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '40%',
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
})

export default Buttons;