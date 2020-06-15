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
            <BoldFooterLink>
              <a href="#">Company</a>
            </BoldFooterLink>
            <FooterLink>
              <a href="#">About</a>
            </FooterLink>
            <FooterLink>
              <a href="#">Contact Us</a>
            </FooterLink>
            <FooterLink>
              <a href="#">Careers</a>
            </FooterLink>
          </ul>
          <ul>
            <BoldFooterLink>
              <a href="#">Account</a>
            </BoldFooterLink>
            <FooterLink>
              <a href="#">Log In</a>
            </FooterLink>
            <FooterLink>
              <a href="#">Create Account</a>
            </FooterLink>
          </ul>
          <ul>
            <BoldFooterLink>
              <a href="#">Support</a>
            </BoldFooterLink>
            <FooterLink>
              <a href="#">Help Center</a>
            </FooterLink>
            <FooterLink>
              <a href="#">Accessibility</a>
            </FooterLink>
          </ul>
        </LinkGrid>
      </LinkSection>
      <SocialSection>
        <SocialIcons type="image/svg+xml" data={Youtube} />
        <SocialIcons type="image/svg+xml" data={Pinterest} />
        <SocialIcons type="image/svg+xml" data={Facebook} />
        <SocialIcons type="image/svg+xml" data={Twitter} />
        <SocialIcons type="image/svg+xml" data={Instagram} />
      </SocialSection>
      <TermsSection>
        <div>
          <TermsSelect name="language" id="language_select">
            <option value="En">English</option>
          </TermsSelect>
        </div>
        <TermsContainer>
          <TermsSpan>© iFit.com. All Rights Reserved.</TermsSpan>
          <TermsSpan>Privacy Policy</TermsSpan>
          <TermsSpan>Terms of Use</TermsSpan>
        </TermsContainer>
        <div></div>
      </TermsSection>
    </FooterSecton>
  );
};

const FooterSecton = styled.footer`
  max-height: 800px;
  min-height: 348px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  background-color: #2e3134;
  color: #fff;
`;

const LinkSection = styled.section`
  height: 55%;
  border-bottom: 2px solid #585a5d;
`;

const SocialSection = styled.section`
  height: 75px;
  border-bottom: 2px solid #585a5d;
  display: flex;
  justify-content: center;
  align-content: center;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: start;
  }
`;

const LinkGrid = styled.div`
  width: 50%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  justify-items: center;
  padding: 20px 0;

  @media (max-width: 800px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    justify-items: start;
  }
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

const SocialIcons = styled.object`
  margin-right: 25px;
  width: 40px;

  @media (max-width: 800px) {
    width: 30px;
  }
`;

const TermsSection = styled.section`
  display: grid;
  min-height: 100px;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  justify-items: center;

  @media (max-width: 1357px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: start;
  }
`;

const TermsContainer = styled.div`
  margin: 0 auto;

  @media (max-width: 800px) {
    margin: 0 40px;
  }
`;

const TermsSpan = styled.span`
  margin-right: 20px;
  opacity: 0.8;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 2rem;

  @media (max-width: 730px) {
    display: block;
  }
`;

const TermsSelect = styled.select`
  margin-left: 40px;
  width: 95px;
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
