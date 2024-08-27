import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const Header = (): JSX.Element => {
  // States
  const theme = useTheme();
  const isSmallScreen = theme.breakpoints.down('sm');

  const [leftMenu, setLeftMenu] = useState<boolean>(false);

  // Function to handle left menu content based on screen size and menu state
  function leftMenuContentHandler(): JSX.Element {
    if (isSmallScreen && leftMenu) {
      return <MenuOpenIcon />;
    }

    if (isSmallScreen) {
      return <MenuIcon />;
    }

    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </>
    );
  }

  useEffect(() => {
    setLeftMenu(Boolean(isSmallScreen));
  }, [isSmallScreen]);

  return (
    <header>
      <div className="left-content">{leftMenuContentHandler()}</div>
      <div className="right-content" />
    </header>
  );
};
