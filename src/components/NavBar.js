import React, { useState, useEffect, useCallback } from 'react';
import { useSpring, animated, config } from 'react-spring';
import MoreMenu, { moreMenuId } from '../components/menus/MoreMenu';
import Controller from '../assets/icons/Controller.svg';
import Mail from '../assets/icons/Mail.svg';
import News from '../assets/icons/News.svg';
import Avatar from '../assets/icons/Avatar.svg';
import NewIdea from '../assets/icons/NewIdea.svg';
import Explode from '../assets/Explode.svg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import AnimationWrapper from './AnimationWrapper';
import MustBeLoggedInModal from './MustBeLoggedInModal';
import { useViewport } from '../context/viewport';

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
	},
	bar: {
		background: '#e4ebf550',
		position: 'fixed',
		padding: `0 ${theme.spacing(1.5)}px`,
		height: '5rem',
		backdropFilter: 'blur(10px)',
		marginBottom: theme.spacing(4),
		boxShadow: `.2rem .2rem 0.8rem ${theme.palette.background.greyLight3}, inset 0.2rem 0.4rem 0.8rem ${theme.palette.common.white}`,
	},
	logo: {
		fontFamily: 'CREAMPUFF',
		color: theme.palette.common.white,
		webkitTextStroke: `1px ${theme.palette.typography.outline}`,
		textShadow: `3px 3px 0 ${theme.palette.typography.outline}, -1px -1px 0 ${theme.palette.typography.outline}, 1px 1px 0 ${theme.palette.typography.outline}, 1px -1px 0 ${theme.palette.typography.outline}, -1px 1px 0 ${theme.palette.typography.outline}, 1px 1px 0 ${theme.palette.typography.outline}`,
		userSelect: 'none',
		WebkitTouchCallout: 'none',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
	},
	menuIconButton: {
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	menuIcon: {
		fontSize: 30,
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			alignItems: 'center',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	navIconLink: {
		marginLeft: theme.spacing(2),
	},
}));

const IconWrapper = ({ src, label }) => {
	const classes = useStyles();

	return (
		<AnimationWrapper style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
			<img
				src={src}
				draggable={false}
				style={{ height: 30, width: 30 }}
				alt={`button to open ${label} page`}
			/>
			<Typography className={classes.navIconLink}>{label}</Typography>
		</AnimationWrapper>
	);
};

function NavBar() {
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const history = useHistory();
	const classes = useStyles();
	const [visible, setVisible] = useState(true);
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
	const [moreMenuAnchorEl, setMoreMenuAnchorEl] = useState(null);
	const [isCreateGameModalOpen, setIsCreateGameModalOpen] = useState(false);
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileAnchorEl);
	const isMoreMenuOpen = Boolean(moreMenuAnchorEl);
	const animatedStyles = useSpring({
		opacity: visible ? 1 : 0,
		config: config.wobbly,
	});
	const { width } = useViewport();
	const breakpoint = 1000;

	const toggleNavBar = useCallback(() => {
		if (window.scrollY > 250) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', toggleNavBar);
		return () => window.removeEventListener('scroll', toggleNavBar);
	}, [toggleNavBar]);

	const handleProfileMenuOpen = useCallback(e => setAnchorEl(e.currentTarget), []);

	const handleMobileMenuOpen = useCallback(e => setMobileAnchorEl(e.currentTarget), []);

	const handleMoreMenuOpen = useCallback(e => setMoreMenuAnchorEl(e.currentTarget), []);

	const handleMenuClose = useCallback(() => {
		setAnchorEl(null);
		setMobileAnchorEl(null);
		setMoreMenuAnchorEl(null);
	}, []);

	// const handleMobileMenuClose = useCallback(() => setMobileAnchorEl(null), []);

	// const handleMenuClose = useCallback(() => {
	//   setAnchorEl(null);
	//   handleMobileMenuClose();
	// }, [handleMobileMenuClose]);

	const handleLinkClick = useCallback(
		path => {
			handleMenuClose();
			history.push(path);
		},
		[handleMenuClose, history]
	);

	const handleCreateGameClick = useCallback(
		path => {
			handleMenuClose();
			if (isLoggedIn) {
				setIsCreateGameModalOpen(true);
			} else {
				handleLinkClick(path);
			}
		},
		[handleLinkClick, handleMenuClose, isLoggedIn]
	);

	const menuId = 'primary-navbar-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={() => handleLinkClick('/icon-list')}>
				<IconWrapper src={Controller} label='Games' />
			</MenuItem>
			<MenuItem onClick={() => handleCreateGameClick('/new-game/general')}>
				<IconWrapper src={NewIdea} label='Create a Game' />
			</MenuItem>
			<MenuItem onClick={() => handleLinkClick('/icon-list')}>
				<IconWrapper src={News} label="What's New" />
			</MenuItem>
			{isLoggedIn && (
				<>
					<Divider />
					<MenuItem onClick={() => handleLinkClick('/icon-list')}>
						<IconWrapper src={Mail} label='Notifications' />
					</MenuItem>
					<MenuItem onClick={() => handleLinkClick('/icon-list')}>
						<IconWrapper src={Avatar} label='My Account' />
					</MenuItem>
				</>
			)}
		</Menu>
	);

	const mobileMenuId = 'primary-navbar-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem>How to Use</MenuItem>
			<MenuItem>About</MenuItem>
			<MenuItem>Contact</MenuItem>
			{!isLoggedIn && <MenuItem className={classes.loginMenuItem}>Login/Signup</MenuItem>}
			<Divider />
			<MenuItem onClick={() => handleLinkClick('/icon-list')}>
				<IconWrapper src={Controller} label='Games' />
			</MenuItem>
			<MenuItem onClick={() => handleCreateGameClick('/new-game/general')}>
				<IconWrapper src={NewIdea} label='Create a Game' />
			</MenuItem>
			<MenuItem onClick={() => handleLinkClick('/icon-list')}>
				<IconWrapper src={News} label="What's New" />
			</MenuItem>
			{isLoggedIn && (
				<>
					<Divider />
					<MenuItem onClick={() => handleLinkClick('/icon-list')}>
						<IconWrapper src={Mail} label='Notifications' />
					</MenuItem>
					<MenuItem onClick={() => handleLinkClick('/icon-list')}>
						<IconWrapper src={Avatar} label='My Account' />
					</MenuItem>
				</>
			)}
		</Menu>
	);

	return (
		<animated.div className={classes.grow} style={animatedStyles}>
			<MustBeLoggedInModal
				title='Oops! Unauthorized.'
				description='Please login to create a new game.'
				isOpen={isCreateGameModalOpen}
				handleClose={() => setIsCreateGameModalOpen(false)}
			/>
			<AppBar position='static' className={classes.bar}>
				<Toolbar className={classes.toolbar}>
					<div
						onClick={() => handleLinkClick('/')}
						style={{
							display: 'flex',
							cursor: 'pointer',
							alignItems: 'center',
						}}>
						{width > breakpoint && (
							<img
								src={Explode}
								alt='app logo'
								draggable={false}
								style={{
									height: '80px',
									width: '80px',
								}}
							/>
						)}
						<Typography className={classes.logo} variant='h3'>
							BLAMMMO!
						</Typography>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<Button>Play</Button>
						<Button>Explore</Button>
						<Button
							aria-label='more-nav-links'
							aria-controls={moreMenuId}
							aria-haspopup='true'
							onClick={handleMoreMenuOpen}>
							More
						</Button>
						{!isLoggedIn && (
							<Button
								variant='contained'
								color='primary'
								onClick={() => {
									history.push('/auth?login=true');
								}}>
								Login/Signup
							</Button>
						)}
						<IconButton
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							onClick={handleProfileMenuOpen}
							className={classes.menuIconButton}>
							<MenuIcon className={classes.menuIcon} />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<Button
							aria-label='more-nav-links'
							aria-controls={moreMenuId}
							aria-haspopup='true'
							onClick={handleMoreMenuOpen}>
							More
						</Button>
						<IconButton
							aria-label='show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							className={classes.menuIconButton}>
							<MoreIcon className={classes.menuIcon} />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<MoreMenu
				moreMenuAnchorEl={moreMenuAnchorEl}
				isMoreMenuOpen={isMoreMenuOpen}
				onMenuClose={handleMenuClose}
			/>
			{renderMobileMenu}
			{renderMenu}
		</animated.div>
	);
}

export default NavBar;
