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
        comments: [],
      });
    },

    addComment(state, action) {
      console.log(state.quotes);
      console.log(action.payload.quoteId);
      const quote = state.quotes.find((q) => q.id === action.payload.quoteId);
      console.log(quote);
      if (quote) {
        quote.comments.push({
          id: Math.random().toString(),
          text: action.payload.text,
        });
      }
    },
  },
});

export const quoteActions = quotesSlice.actions;

export default quotesSlice.reducer;
