import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToDo from './components/ToDo';

function App() {
	const [todos, setTodos] = useState([]);
	const [form, setForm] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let todo = {
			task: form,
			isChecked: false
		}
		setTodos(oldTodos => [...oldTodos, todo]);
		setForm("");
	}

	const handleCheck = (e, idx) => {
		let todo = todos[idx];
		todo.isChecked = !todo.isChecked;
		setTodos(oldTodos => ([...oldTodos]));
	}

	const handleDestroy = (e, idx) => {
		e.preventDefault();
		setTodos([...todos.slice(0, idx)].concat(todos.slice(idx + 1)))
	}

	return (
		<div className="App">
			<div>
				{
					todos.map((todo, idx) => {
						return <ToDo
							todo={todo}
							handleCheck={handleCheck}
							handleDestroy={handleDestroy}
							idx={idx}
							key={idx} />
					})
				}
			</div>
			<form className="col-5" onSubmit={(e) => handleSubmit(e)}>
				<div className="form-group">
					<label>To Do Task:</label>
					<input className="form-control" type="text" value={form} onChange={(e) => setForm(e.target.value)} />
				</div>
				<input type="submit" value="Add ToDo" className="btn btn-primary" />
			</form>
		</div>
	);
}

export default App;
