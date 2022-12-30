import { createSlice } from '@reduxjs/toolkit';

const linkDetailsList = {
  links: {
    nav: {
      allQuote: {
        id: 'all_quotes',
        text: 'All Quotes',
        url: '/quotes',
      },
      addQuote: {
        id: 'add_quotes',
        text: 'Add a Quote',
        url: '/add-quote',
      },
    },
    quoteDetails: {
      id: 'quote_details',
      text: 'Quote details',
      url: '/quotes/:quoteId',
    },
  },
};

const linkDetailsSlice = createSlice({
  name: 'linkDetails',
  initialState: linkDetailsList,
  reducers: {},
});

export default linkDetailsSlice.reducer;
