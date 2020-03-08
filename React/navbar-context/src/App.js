import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FormWrapper from './components/Form';
import Wrapper from './components/Wrapper';
import 'bootstrap/dist/css/bootstrap.css';
import MyContext from './contexts/MyContext';

function App() {
	const [val, setVal] = useState({
		userName: ""
	})
	return (
		<div className="App">
			<MyContext.Provider value={{val, setVal}}>
				<Wrapper />
				<FormWrapper />
			</MyContext.Provider>
		</div>
	);
}

export default App;
