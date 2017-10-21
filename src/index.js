import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDMMHssKi7QI_le8U2rjBVji5USkfsxcpg';

const App = () => (
	<div>
		<SearchBar />
	</div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
