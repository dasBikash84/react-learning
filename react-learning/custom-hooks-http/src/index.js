import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { FirebaseContextProvider } from './store/FirebaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <FirebaseContextProvider>
      <App />
    </FirebaseContextProvider>
  </ErrorBoundary>
);
