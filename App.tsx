import {View, Text, NativeModules} from 'react-native';
import React from 'react';
const {BuildFlavorModule} = NativeModules;

const App = () => {
  const buildFlavor = BuildFlavorModule.getBuildFlavor();

  console.log('Build Flavor:', buildFlavor);
  return (
    <View testID="welcome">
      <Text>App</Text>
    </View>
  );
};

export default App;
