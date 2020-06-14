import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeroImage from '../images/gmapsinworkout.png';

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroHeading>
          The best personal training, right in your own home
        </HeroHeading>
        <Button>JOIN IFIT COACH</Button>
      </Container>
    </HeroSection>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const HeroSection = styled.div`
  display: flex;
  width: auto;
  height: 801px;
  justify-content: center;
  align-items: center;
  background-image: url('${HeroImage}'),
    -webkit-gradient(linear, left top, left bottom, from(#000), to(#000));
  background-position: 0px 0px, 0px 0px;
  background-size: cover, auto;
  opacity: 1;
`;

const HeroHeading = styled.div`
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  font-size: 68px;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
  margin: 3rem 0;
  animation: 2s ${fadeIn} ease-out;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
`;

const Button = styled.button`
  display: flex;
  overflow: visible;
  width: 392px;
  height: 56px;
  max-width: 850px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #0069d2;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.24), 0 0 0 1px rgba(0, 0, 0, 0.12);
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
  border: none;
  color: #fff;
`;

export default Hero;
