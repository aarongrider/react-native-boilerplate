import React from 'react';
import ReactDOM from 'react-dom';
import {View, useWindowDimensions} from 'react-native';

import App from './src/App';

const WebRoot = () => {
  return (
    <View
      style={{
        width: useWindowDimensions().width,
        height: useWindowDimensions().height,
      }}>
      <App />
    </View>
  );
};

ReactDOM.render(<WebRoot />, document.getElementById('app'));
