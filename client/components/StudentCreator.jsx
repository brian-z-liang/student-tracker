import React, { useState, useEffect } from 'react';


const StudentCreator  = (props) => {
  const [name, setName] = useState('');

  // useEffect(() => {
	// })
	const post = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ Name: name})
	};
	const handleClick = (e) => {
		e.preventDefault();
		fetch('/newData', post)
			.then(res => {
				console.log(res)
			})
			.catch(err => console.log(err));
	};

	return (
	<div>
		<form onSubmit={handleClick}>
			<label>
			<input type="text" onChange={(e) => setName(e.target.value)}/>
			<button type="submit">Post</button>
			</label>
		</form>
	</div>
	)
};

export default StudentCreator;