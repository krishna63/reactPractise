import React from 'react';
import { createRoot } from 'react-dom/client';
import {App} from './App';

// Render your React component instead
const root = createRoot(document.getElementById('react-root-19') as HTMLElement);
root.render(<App />);