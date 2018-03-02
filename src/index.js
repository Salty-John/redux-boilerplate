import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CounterApp from './reducers/counterReducer';

// create store
const store = createStore(CounterApp);

import Counter from './containers/counter';

class App extends React.Component {
  render() {
  	return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

render(
  <App />,  
  document.getElementById('app')
 );
