import React from 'react';
import styled from 'styled-components';
import Youtube from '../images/svgs/youtube.svg';
import Pinterest from '../images/svgs/pinterest.svg';
import Facebook from '../images/svgs/facebook.svg';
import Twitter from '../images/svgs/twitter.svg';
import Instagram from '../images/svgs/instagram.svg';
import Chevron from '../images/Icon/chevron.png';

const TheFooter = () => {
  return (
    <FooterSecton>
      <LinkSection>
        <LinkGrid>
          <ul>
            <BoldFooterLink>Company</BoldFooterLink>
            <FooterLink>About</FooterLink>
            <FooterLink>Contact Us</FooterLink>
            <FooterLink>Careers</FooterLink>
          </ul>
          <ul>
            <BoldFooterLink>Account</BoldFooterLink>
            <FooterLink>Log In</FooterLink>
            <FooterLink>Create Account</FooterLink>
          </ul>
          <ul>
            <BoldFooterLink>Support</BoldFooterLink>
            <FooterLink>Help Center</FooterLink>
            <FooterLink>Accessibility</FooterLink>
          </ul>
        </LinkGrid>
      </LinkSection>
      <SocialSection>
        <SocialIcons src={Youtube} alt="Youtube Icon" />
        <SocialIcons src={Pinterest} alt="Pinterest Icon" />
        <SocialIcons src={Facebook} alt="Facebook Icon" />
        <SocialIcons src={Twitter} alt="Twitter Icon" />
        <SocialIcons src={Instagram} alt="Instagram Icon" />
      </SocialSection>
      <TermsSection>
        <TermsSelect name="language" id="language_select">
          <option value="En">English</option>
        </TermsSelect>
        <TermsContainer>
          <TermsSpan>© iFit.com. All Rights Reserved.</TermsSpan>
          <TermsSpan>Privacy Policy</TermsSpan>
          <TermsSpan>Terms of Use</TermsSpan>
        </TermsContainer>
      </TermsSection>
    </FooterSecton>
  );
};

const FooterSecton = styled.footer`
  height: 348px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  background-color: #2e3134;
  color: #fff;
`;

const LinkSection = styled.section`
  height: 55%;
  border-bottom: 2px solid #585a5d;
`;

const SocialSection = styled.section`
  height: 15%;
  border-bottom: 2px solid #585a5d;
  display: flex;
  justify-content: center;
`;

const LinkGrid = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  justify-items: center;
  padding: 20px 0;
`;

const FooterLink = styled.li`
  list-style-type: none;
  opacity: 0.8;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 2rem;
`;

const BoldFooterLink = styled.li`
  list-style-type: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 2rem;
`;

const SocialIcons = styled.img`
  margin-right: 25px;
`;

const TermsSection = styled.section`
  display: flex;
  height: 29%;
  align-items: center;
`;

const TermsContainer = styled.div`
  margin: 0 31%;
`;

const TermsSpan = styled.span`
  margin-right: 20px;
  opacity: 0.8;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 2rem;
`;

const TermsSelect = styled.select`
  margin-left: 50px;
  width: 85px;
  background-color: inherit;
  font-size: 16px;
  height: 34px;
  appearance: none;
  color: white;
  border: none;
  background-image: url("${Chevron}");
  background-repeat: no-repeat;
  background-position-x: 100%;
`;

export default TheFooter;
