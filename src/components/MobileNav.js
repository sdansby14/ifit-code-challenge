import React from 'react';
import styled from 'styled-components';
import iFitLogo from '../images/svgs/ifit-coach-logo.svg';
import MobileMenu from '../images/svgs/hamburger-menu.svg';

const MobileNav = () => {
  return (
    <nav>
      <TopNav>
        <a href="" className="">
          <img src={iFitLogo} alt="iFit Coach Logo" />
        </a>
        <MobileIcon src={MobileMenu} alt="MobileMenu" />
      </TopNav>
    </nav>
  );
};

const TopNav = styled.div`
  height: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  padding: 0 20px;
`;

const MobileIcon = styled.img`
  justify-self: end;
`;

export default MobileNav;
