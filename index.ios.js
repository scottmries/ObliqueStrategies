/**
 * Oblique Strategies
 * https://github.com/scottmries/ObliqueStrategies
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';

import obliqueStrategies from './obliqueStrategies.js';

class ObliqueStrategies extends Component {
  constructor() {
    super();
    this.state = {text: "Oblique Strategies", bounceValue: new Animated.Value(0)};
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.setState({
      text: obliqueStrategies[Math.floor(Math.random() * (obliqueStrategies.length - 1))]
    })

  }

  componentDidMount() {
    // this.state.bounceValue.setValue(1.5);
    // Animated.spring(
    //   this.state.bounceValue,
    //   {
    //     toValue: 0.8,
    //     friction: 1,
    //   }
    // ).start();
  }

  // componentWillMount() {
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
  // }
  render() {
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={(evt) => true}
>

          <Text
            style={styles.welcome}
            onPress={() => this.onPress()}>
              {this.state.text}
          </Text>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});

AppRegistry.registerComponent('ObliqueStrategies', () => ObliqueStrategies);
