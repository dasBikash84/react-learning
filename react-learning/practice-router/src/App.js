import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import QuoteDetails from './pages/QuoteDetails';
import AddQuote from './pages/AddQuote';
import AllQuotes from './pages/AllQuotes';
import { useCallback, useState } from 'react';
import ErrorModal from './components/UI/ErrorModal';
import AppContext from './store/AppContext';
import { Navigate, Routes } from 'react-router-dom/dist';

function App() {
  const linkDetails = useSelector((state) => state.linkDetails.links);

  const [errorModalVisiable, setErrorModalVisibility] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState(
    'Something went wrong. Please try again later.'
  );
  const [errorModalOkAction, setErrorModalOkAction] = useState();

  const errorModalCloseHandler = () => {
    setErrorModalVisibility(false);
  };

  const displayErrorModal = useCallback((message, okayAction) => {
    setErrorModalMessage(message);
    setErrorModalOkAction(okayAction);
    setErrorModalVisibility(true);
  }, []);

  return (
    <AppContext.Provider
      value={{
        displayErrorModal,
      }}
    >
      <Layout>
        {errorModalVisiable && (
          <ErrorModal
            message={errorModalMessage}
            onClose={errorModalCloseHandler}
            onOkPress={errorModalOkAction}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={<Navigate to={linkDetails.nav.allQuote.url} />}
            replace
          />
          <Route path={linkDetails.nav.allQuote.url} element={<AllQuotes />} />
          <Route path={linkDetails.nav.addQuote.url} element={<AddQuote />} />
          <Route
            path={linkDetails.quoteDetails.url}
            element={<QuoteDetails />}
          />
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
