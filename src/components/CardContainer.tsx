import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ICard } from '../types/cards'

interface IProps {
  card?: ICard | null
}

const CardContainer: React.FC<IProps> = ({ card }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: card ? card.cards[0].image : 'https://reactnative.dev/img/tiny_logo.png',
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: 'center',

  },
  image: {
    borderRadius: 10,
    height: 150,
    width: 100,
  },
});

export default CardContainer;