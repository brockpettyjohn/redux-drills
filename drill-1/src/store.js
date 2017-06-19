import { createStore } from 'redux';
import guestList_Reducer from './ducks/guestList'

export default createStore(guestList_Reducer);