import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import LoginForm from '../components/auth/LoginForm';
import SignUpForm from '../components/auth/SignUpForm';

const AuthPage = () => {
	// this checks if `?login=true` is appended to the URL
	const isLogin = new URLSearchParams(useLocation().search).get('login') === 'true';

	return (
		<div
			style={{
				paddingTop: '8rem',
			}}>
			<Container>{isLogin ? <LoginForm /> : <SignUpForm />}</Container>
		</div>
	);
};

export default AuthPage;
