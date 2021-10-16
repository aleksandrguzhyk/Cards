import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import cardsAPI from './src/api/cards'
import CardContainer from './src/components/CardContainer'
import Header from './src/components/Header';
import Buttons from './src/components/Buttons'

const App = () => {
  const [deckId, setDeckId] = useState('')
  const [total, setTotal] = useState(null)
  const [count, setCount] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [card, setCard] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await cardsAPI.get('/new/shuffle/?deck_count=1');
      const { data } = response
      await setDeckId(data.deck_id)
      await setTotal(data.remaining)
    }
    fetchData()
  }, [])


  const drawCard = async () => {
    const response = await cardsAPI.get(`/${deckId}/draw/?count=1`);
    const { data } = response
    console.log('data from drawCard', data);

    if (response.data) {
      setCount(count + 1)
      await setCard(data)
    }
  }

  const ReshuffleCards = async () => {
    const response = await cardsAPI.get(`/${deckId}/shuffle/`);
    console.log('data from ReshuffleCards', response.data);
  }

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <Header />
        <View>
          <View>
            <Text>Total cards: {total}</Text>
            <Text>Cards left: {count}</Text>
            <Text>Correct Answears: {correct}</Text>
          </View>
          <View style={styles.cardsContainer}>
            <Pressable
              onPress={drawCard}
              onLongPress={ReshuffleCards}
            >
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }} />
              <CardContainer />
            </Pressable>
            <CardContainer card={card} />
          </View>
          <Buttons />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 50,
  },
});

export default App;
