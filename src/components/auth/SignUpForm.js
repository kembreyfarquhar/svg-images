import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/';
import { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const useStyles = makeStyles(theme => ({
	form: {},
}));

const SignUpForm = () => {
	const classes = useStyles();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<form className={classes.form}>
			<TextField
				title='email'
				placeholder='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<TextField
				title='password'
				placeholder='password'
				value={password}
				type='password'
				onChange={e => setPassword(e.target.value)}
			/>

			<Button
				onClick={async () => {
					const newUser = await axios.post(`${API_URL}/users/register`, { email, password });
					console.log(JSON.stringify(newUser));

					if (newUser) {
						localStorage.setItem('token', newUser.token);
					}
				}}>
				Sign Up
			</Button>
		</form>
	);
};

export default SignUpForm;
