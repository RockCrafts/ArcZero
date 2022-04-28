import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDNtmzzPPUuiMuu1mDmHYd9r20SImvoCDw',
  authDomain: 'arczero-91c20.firebaseapp.com',
  projectId: 'arczero-91c20',
  storageBucket: 'arczero-91c20.appspot.com',
  messagingSenderId: '35116599539',
  appId: '1:35116599539:web:82c044b11d050da6170f86',
  measurementId: 'G-WY7H8KLQ28',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App firebase={app} />
  </React.StrictMode>
);
