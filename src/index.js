import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyle';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<GlobalStyles>
		<App />
	</GlobalStyles>
);
