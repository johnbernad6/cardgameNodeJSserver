import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ShoppingList from './components/ShoppingList';
import AddItem from './components/AddItem';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddItem />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
