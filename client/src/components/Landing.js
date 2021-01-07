import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Emaily!</h1>
			Collect feedback form your users
			<h2>
				<Link to="/surveys">Let's Go</Link>
				<div className="test-warning">
					*Please use the following test credit card for payments*
					<br />
					4242 4242 4242 4242 - Exp: 02/21 - CVV: 123
				</div>
			</h2>
		</div>
	);
};

export default Landing;
