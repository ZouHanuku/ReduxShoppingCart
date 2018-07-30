import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import articlesReducer from './articlesReducer';

const allReducers = combineReducers({
  cart: cartReducer,
  articles: articlesReducer
})

export default allReducers;