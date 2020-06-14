import React from 'react';
import styled from 'styled-components';
import GlobalContext from '../context/global-context';

const Reviews = () => {
  return (
    <GlobalContext.Consumer>
      {(context) => (
        <ReviewsSection>
          <ReviewGrid>
            {context.reviews.map(({ id, review, image, alt }) => {
              return (
                <Card key={id}>
                  <CompanyLogo src={image} alt={alt} />
                  <ReviewSpan>{review}</ReviewSpan>
                </Card>
              );
            })}
          </ReviewGrid>
        </ReviewsSection>
      )}
    </GlobalContext.Consumer>
  );
};

const ReviewsSection = styled.section`
  height: 232px;
  border-radius: 2px;
  background-color: #f4f5f7;
  overflow-x: hidden;
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
  min-width: 230px;
  max-width: 440px;
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
