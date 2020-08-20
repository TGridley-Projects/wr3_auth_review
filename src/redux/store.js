import { createStore } from 'redux';
import authReducer from '../redux/reducers/authReducer';

export default createStore(authReducer);