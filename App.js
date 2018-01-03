import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fonsSize: 42}}>
          {this.state.text.split(' ').map((word) => word && 'H').join(' ')}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);
