import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { Spotify } from '../assets/icons';

const App = () => {
  return (
    <div>
      <h1>Testing Spotify Component</h1>
      <Spotify />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
