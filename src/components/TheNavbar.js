import React from 'react';
import styled from 'styled-components';

import iFitLogo from '../images/svgs/ifit-coach-logo.svg';

const TheNavbar = () => {
  return (
    <Nav>
      <TopNavSection>
        <LinkContainer>Blog</LinkContainer>
        <Divider />
        <LinkContainer>Nourish</LinkContainer>
        <Divider />
        <LinkContainer>Shop</LinkContainer>
        <Divider />
      </TopNavSection>
      <NavSection>
        <NavGrid>
          <LogoContainer>
            <img src={iFitLogo} alt="iFit Logo" />
          </LogoContainer>
          <MainLinkContainer>
            <LinkContainer>Exercise</LinkContainer>
            <LinkContainer>Nutrition</LinkContainer>
            <LinkContainer>Activity</LinkContainer>
            <LinkContainer>Sleep</LinkContainer>
          </MainLinkContainer>
          <SignupContainer>
            <Button>Sign Up</Button>
          </SignupContainer>
        </NavGrid>
      </NavSection>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 15vh;
`;

const TopNavSection = styled.section`
  height: 40%;
  border-bottom: 1px solid #d5d6d6;
  display: flex;
  align-items: center;
`;

const NavSection = styled.section`
  height: 60%;
`;

const LinkContainer = styled.div`
  padding: 0 2.5rem;
  color: rgba(46, 49, 52, 0.8);
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 14px;
  text-transform: uppercase;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  border-right: 1px solid #d5d6d6;
`;

const NavGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 2.5rem;
`;

const MainLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2rem;
`;

const Button = styled.button`
  overflow: visible;
  width: 90px;
  height: 36px;
  max-width: 90px;
  border-radius: 4px;
  background-color: #0069d2;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.24), 0 0 0 1px rgba(0, 0, 0, 0.12);
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: 1px;
  border: none;
  color: #fff;
  text-transform: uppercase;
`;

export default TheNavbar;
