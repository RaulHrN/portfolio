import React, {useEffect, useState} from 'react';
import {useTheme} from '@mui/material/styles';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export function Header(): JSX.Element {
	// States
	const theme = useTheme();
	const smallScreen = theme.breakpoints.down('sm');

	const [leftMenuContent, setLeftMenuContent] = useState<JSX.Element>(() => leftMenuContentHandler());
	const [leftMenu, setLeftMenu] = useState<boolean>(false);

	useEffect(() => {
		setLeftMenuContent(leftMenuContentHandler());
		setLeftMenu(Boolean(smallScreen));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [smallScreen]);

	function leftMenuContentHandler(): JSX.Element {
		if (smallScreen) {
			console.log('tela pequena');
			return (
				leftMenu ? <MenuIcon /> : <MenuOpenIcon />
			);
		}

		console.log('tela grande');
		return (
			<>
				<Link to={'/'}>Home</Link>
				<Link to={'/projects'}>Projects</Link>
				<Link to={'/resume'}>Resume</Link>
			</>
		);
	}

	return (
		<header>
			<div className='left-content'>
				{leftMenuContent}
			</div>
			<div className='right-content'></div>
		</header>
	);
}
