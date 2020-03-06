import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tab from './components/Tab'

function App() {
	const [tabs, setTabs] = useState([
		{
			name: "Tab 1",
			text: "content for tab 1",
			isSelected: false
		},
		{
			name: "Tab 2",
			text: "content for tab 2",
			isSelected: false
		},
		{
			name: "Tab 3",
			text: "content for tab 3",
			isSelected: false
		},
		{
			name: "Tab 4",
			text: "content for tab 4",
			isSelected: false
		}
	]);

	const handleClick = (e, idx) => {
		tabs.forEach((t, i) => {
			if (idx != i) {
				t.isSelected = false;
				setTabs([
					...tabs.slice(0, i)
				].concat(t));
			}
			else {
				t.isSelected = true;
				setTabs([
					...tabs.slice(0, i)
				].concat(t));
			}
		});
	}


	return (
		<div className="App">
			{
				tabs.map((tab, idx) => {
					return <Tab tab={tab} text={tab.name} handleClick={(e) => handleClick(e, idx)} key={idx} idx={idx}/>
				})
			}
			{
				tabs.map((t, idx) => {
					if (t.isSelected) {
						return (
							<div className="card col-5 mx-auto">
								<p>{t.text}</p>
							</div>
						)
					}
					return null;
				})
			}
		</div>
	);
}

export default App;
