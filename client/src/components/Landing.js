import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Emaily!</h1>
			Collect feedback form your users
			<h2>
				<Link to="/surveys">Let's Go</Link>
			</h2>
		</div>
	);
};

export default Landing;
