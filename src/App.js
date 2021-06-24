import React from 'react';
import { useSelector } from 'react-redux';
import asyncComponent from './components/AsyncComponent';
import NavBar from './components/NavBar';
import theme from './theme';
import { Switch, Route } from 'react-router-dom';
import { ViewportProvider } from './context/viewport';
import { ThemeProvider } from '@material-ui/core/styles';
import RidingRocket from './assets/characters/RidingRocket.svg';
import Welcome from './assets/characters/Welcome.svg';
import Avatar from './assets/icons/Avatar.svg';
import Basketball from './assets/icons/Basketball.svg';
import Controller from './assets/icons/Controller.svg';
import Favorites from './assets/icons/Favorites.svg';
import Logo from './assets/icons/Logo.svg';
import Mail from './assets/icons/Mail.svg';
import NewIdea from './assets/icons/NewIdea.svg';
import ThumbsUp from './assets/icons/ThumbsUp.svg';
import Trending from './assets/icons/Trending.svg';
import Blammo from './assets/Blammo.svg';
import useCachedImages from './hooks/useCachedImages';
import Home from './pages/HomePage';
const AsyncIconList = asyncComponent(() => import('./pages/IconList'));
const AsyncNewGame = asyncComponent(() => import('./pages/NewGame'));
const AsyncNewQuiz = asyncComponent(() => import('./components/newGameForms/NewQuiz'));
const AsyncNewSomething = asyncComponent(() => import('./components/newGameForms/NewSomething'));
const AsyncAuth = asyncComponent(() => import('./pages/AuthPage'));

const images = [
	RidingRocket,
	Welcome,
	Avatar,
	Basketball,
	Controller,
	Favorites,
	Logo,
	Mail,
	NewIdea,
	ThumbsUp,
	Trending,
	Blammo,
];

function App() {
	const isLoading = useCachedImages(images);
	const isPlaying = useSelector(state => state.gamePlay.isPlaying);

	if (isLoading) return <h1>Loading...</h1>;
	return (
		<ViewportProvider>
			<ThemeProvider theme={theme}>
				<div style={{ height: '100%' }}>
					{!isPlaying && <NavBar />}
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/icon-list'>
							<AsyncIconList />
						</Route>
						<Route path='/new-game/general'>
							<AsyncNewGame />
						</Route>
						<Route path='/new-game/quiz'>
							<AsyncNewQuiz />
						</Route>
						<Route path='/new-game/something'>
							<AsyncNewSomething />
						</Route>
						<Route path='/auth'>
							<AsyncAuth />
						</Route>
					</Switch>
				</div>
			</ThemeProvider>
		</ViewportProvider>
	);
}

export default App;
