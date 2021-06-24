import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const useStyles = makeStyles(theme => ({
	form: {},
}));

const LoginForm = () => {
	const classes = useStyles();
	const history = useHistory();
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
					const res = await axios.post(`${API_URL}/users/login`, { email, password });
					const user = res.data;
					if (user) {
						alert('Welcome!');
						localStorage.setItem('token', user.token);
						history.push('/');
					}
				}}>
				Login
			</Button>
		</form>
	);
};

export default LoginForm;
