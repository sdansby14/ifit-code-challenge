import React, { useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import HeroImage from '../images/gmapsinworkout.png';
import HeroImageMed from '../images/gmapsinworkout-med.png';
import HeroImageSm from '../images/gmapsinworkout-sm.png';
import HeroImageXSm from '../images/gmapsinworkout-xsm.png';
import HeroImageXXSm from '../images/gmapsinworkout-xxsm.png';
import { useInView } from 'react-intersection-observer';
import GlobalContext from '../context/global-context';
import LanguageContext from '../context/language-context';

const Hero = () => {
  const { setIsVisible } = useContext(GlobalContext);
  const { languageContent } = useContext(LanguageContext);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <HeroSection ref={ref}>
      <Container>
        <HeroHeading>{languageContent.title}</HeroHeading>
        <Button>{languageContent.button_text}</Button>
      </Container>
    </HeroSection>
  );
};

const fadeIn = keyframes`
  0%{
      transform: rotate(0) translateY(-15%);
      opacity: 0;
    }
  100%{
      transform: rotate(0) translateY(0);
      opacity: 1;
    }
`;

const HeroSection = styled.div`
  display: flex;
  height: 801px;
  justify-content: center;
  align-items: center;
  background-image: url('${HeroImage}'),
    -webkit-gradient(linear, left top, left bottom, from(#000), to(#000));
  background-position: 0px 0px, 0px 0px;
  background-size: cover, auto;
  background-position: center center;
  opacity: 1;

  @media (max-width: 1040px) {
    background-image: url('${HeroImageMed}'),
    -webkit-gradient(linear, left top, left bottom, from(#000), to(#000));
    height: 505px;
  }

  @media (max-width: 762px) {
    background-image: url('${HeroImageSm}'),
    -webkit-gradient(linear, left top, left bottom, from(#000), to(#000));
    height: 320px;
  }
  
  @media (max-width: 550px) {
    background-image: url('${HeroImageXSm}'),
    -webkit-gradient(linear, left top, left bottom, from(#000), to(#000));
    height: 279px;
  }
  
  @media (max-width: 350px) {
    background-image: url('${HeroImageXXSm}'),
    -webkit-gradient(linear, left top, left bottom, from(#000), to(#000));
  }
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
  animation: ${fadeIn} 1s forwards 0s ease-out;

  @media (max-width: 991px) {
    font-size: 54px;
  }

  @media (max-width: 730px) {
    font-size: 34px;
  }

  @media (max-width: 460px) {
    font-size: 21px;
  }
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
`;

const Button = styled.button`
  display: flex;
  overflow: visible;
  width: 60%;
  height: 56px;
  max-width: 392px;
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
