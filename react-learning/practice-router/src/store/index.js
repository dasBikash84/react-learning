import { configureStore } from '@reduxjs/toolkit';

import linkDetailsSliceReducer from './link-details-slice';
import quotesSliceReducer from './quotes-slice';

const store = configureStore({
  reducer: { linkDetails: linkDetailsSliceReducer, quotes: quotesSliceReducer },
});

export default store;
