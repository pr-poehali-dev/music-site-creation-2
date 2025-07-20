import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import '@fontsource/oswald/400.css'
import '@fontsource/oswald/700.css'
import '@fontsource/open-sans/400.css'

createRoot(document.getElementById("root")!).render(<App />);