import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { SubHeader } from '../subheader/SubHeader';
import { mainNavLinks } from '../../data/siteData';

/**
 * HeaderArea component dynamically renders the appropriate header structure
 * based on the current route. It handles the logic for displaying either a
 * SubHeader for specific pages or the main Header and Navbar combination.
 */
export function HeaderArea() {
  const location = useLocation();
  const isSubHeaderPage =
    location.pathname === "/about" || location.pathname === "/location";

  return (
    <>
      {isSubHeaderPage ? (
        <SubHeader />
      ) : (
        <>
          <Header />
          <Navbar navItems={mainNavLinks} />
        </>
      )}
    </>
  );
}
