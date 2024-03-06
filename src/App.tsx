import React from 'react';
import StackNavigator from './navigators/StackNavigator';
import {RootProvider} from './context/RootContext';

const App = () => {
  return (
    <RootProvider>
      <StackNavigator />
    </RootProvider>
  );
};

export default App;
