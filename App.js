import React, {PureComponent} from 'react';
import {StatusBar, StyleSheet, View,Image} from 'react-native';
import Entities from './src/entities';
import {GameEngine} from 'react-native-game-engine';
import Systems from './src/systems';

const skyImg = require('./src/assets/sky.jpeg');

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      running: true,
    };
    this.gameEngine = null;
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Image source={skyImg}/>
        <GameEngine
          ref={ref => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          entities={Entities()}
          systems={Systems}
          running={this.state.running}>
          <StatusBar hidden={true} />
        </GameEngine>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});