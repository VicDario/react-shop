import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './routes/App';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter basename="/">
			<App />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('app')
);
