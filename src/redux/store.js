import { createStore } from 'redux';
import taskReducer from './reducers';

const store = createStore(taskReducer); // સ્ટોર બનાવો અને Reducer જોડો

export default store;
