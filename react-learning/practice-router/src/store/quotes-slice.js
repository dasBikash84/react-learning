import { createSlice } from '@reduxjs/toolkit';

const quotesSlice = createSlice({
  name: 'quotes',
  initialState: { quotes: [] },
  reducers: {
    addQuote(state, action) {
      const author = action.payload && action.payload.author;
      const text = action.payload && action.payload.text;
      const id = (
        (action.payload && action.payload.id) ||
        Math.random()
      ).toString();

      state.quotes.push({
        id,
        author,
        text,
      });
    },
  },
});

export const quoteActions = quotesSlice.actions;

export default quotesSlice.reducer;
