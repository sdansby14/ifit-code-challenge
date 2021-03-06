import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import iFitLogo from '../images/svgs/ifit-coach-logo.svg';
import LanguageContext from '../context/language-context';

const TheNavbar = ({ isVisible }) => {
  const { languageContent } = useContext(LanguageContext);

  return (
    <Nav isVisible={isVisible}>
      <TopNavSection>
        <LinkContainer>
          <a href="#">{languageContent.nav_blog}</a>
        </LinkContainer>
        <Divider />
        <LinkContainer>
          <a href="#">{languageContent.nav_nourish}</a>
        </LinkContainer>
        <Divider />
        <LinkContainer>
          <a href="#">{languageContent.nav_shop}</a>
        </LinkContainer>
        <Divider />
      </TopNavSection>
      <NavSection>
        <NavGrid>
          <LogoContainer>
            <a href="#">
              <img src={iFitLogo} alt="iFit Logo" />
            </a>
          </LogoContainer>
          <MainLinkContainer>
            <LinkContainer>
              <a href="#">{languageContent.nav_exercise}</a>
            </LinkContainer>
            <LinkContainer>
              <a href="#">{languageContent.nav_nutrition}</a>
            </LinkContainer>
            <LinkContainer>
              <a href="#">{languageContent.nav_activity}</a>
            </LinkContainer>
            <LinkContainer>
              <a href="#">{languageContent.nav_sleep}</a>
            </LinkContainer>
          </MainLinkContainer>
          <SignupContainer>
            <Button>{languageContent.nav_btn}</Button>
          </SignupContainer>
        </NavGrid>
      </NavSection>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 15vh;
  z-index: 10;
  background-color: #fff;

  ${(props) =>
    !props.isVisible &&
    css`
      display: none;
    `}
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
