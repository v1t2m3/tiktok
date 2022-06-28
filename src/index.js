import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyle';
import store from './redux/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<GlobalStyles>
			<App />
		</GlobalStyles>
	</Provider>
);
