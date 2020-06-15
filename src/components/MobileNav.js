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
        {/* <div id="myLinks">
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div> */}
        {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()"> */}

        <MobileIcon src={MobileMenu} alt="MobileMenu" />
        {/* </a> */}
      </TopNav>
    </nav>
  );
};

// .mobile-container {
//   max-width: 480px;
//   margin: auto;
//   background-color: #555;
//   height: 500px;
//   color: white;
//   border-radius: 10px;
// }

// .topnav {
//   overflow: hidden;
//   background-color: #333;
//   position: relative;
// }

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

// .topnav #myLinks {
//   display: none;
// }

// .topnav a {
//   color: white;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
//   display: block;
// }

// .topnav a.icon {
//   background: black;
//   display: block;
//   position: absolute;
//   right: 0;
//   top: 0;
// }

// .topnav a:hover {
//   background-color: #ddd;
//   color: black;
// }

// .active {
//   background-color: #4CAF50;
//   color: white;
// }

export default MobileNav;
