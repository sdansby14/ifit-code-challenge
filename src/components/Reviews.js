import React from 'react';
import styled from 'styled-components';
import WiredLogo from '../images/wired_logo.png';
import MashableLogo from '../images/mashable_logo.png';
import GearJunkieLogo from '../images/gearjunkie-vector-logo.png';

const Reviews = () => {
  return (
    <ReviewsSection>
      <ReviewGrid>
        <Card>
          <CompanyLogo src={GearJunkieLogo} alt="Gear Junkie Logo" />
          <ReviewSpan>
            “You focus on putting in the work, and the technology handles the
            rest.”
          </ReviewSpan>
        </Card>
        <Card>
          <CompanyLogo src={WiredLogo} alt="Wired Logo" />
          <ReviewSpan>
            “Literally transports you from home to wherever you choose to run.”
          </ReviewSpan>
        </Card>
        <Card>
          <CompanyLogo src={MashableLogo} alt="Mashable Logo" />
          <ReviewSpan>
            “Breathes new life into a tired, old running routine.”
          </ReviewSpan>
        </Card>
      </ReviewGrid>
    </ReviewsSection>
  );
};

const ReviewsSection = styled.section`
  height: 232px;
  border-radius: 2px;
  background-color: #f4f5f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const ReviewGrid = styled.div`
  display: grid;
  width: 95%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  grid-gap: 0 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
`;

const ReviewSpan = styled.span`
  opacity: 0.8;
  color: #2e3134;
  line-height: 2;
  letter-spacing: 0.3px;
  width: 85%;
`;

const Card = styled.div`
  display: flex;
  width: 440px;
  height: 184px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
  text-align: center;
`;

const CompanyLogo = styled.img`
  margin: 10px 0;
`;

export default Reviews;
