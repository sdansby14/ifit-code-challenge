import React from 'react';
import styled from 'styled-components';

const TheNavbar = () => {
  return (
    <Nav>
      <TopNavSection>
        <TopUL>
          <TopList>Blog</TopList>
          <TopList>Nourish</TopList>
          <TopList>Shop</TopList>
        </TopUL>
      </TopNavSection>
      <NavSection></NavSection>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 15vh;
`;

const TopNavSection = styled.section`
  height: 40%;
  border: 1px solid #d5d6d6;
`;

const NavSection = styled.section`
  height: 60%;
`;

const TopUL = styled.ul`
  height: 100%;
`;

const TopList = styled.div`
  height: 100%;
  display: inline;
  list-style-type: none;
  margin: 0.5rem 2rem;
  border-right: 1px solid #d5d6d6;
`;

export default TheNavbar;
