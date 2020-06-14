import React from 'react';
import styled from 'styled-components';

const equipment = [
  {
    title: 'Treadmills',
    img_src:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/NTL390190664.png',
  },
  {
    title: 'Bikes',
    img_src:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/bikeperson.png',
  },
  {
    title: 'Ellipticals',
    img_src:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/ellipticalperson.png',
  },
  {
    title: 'Strength',
    img_src:
      'https://raw.githubusercontent.com/sdansby14/ifit-code-challenge/master/src/images/6-pulley12557.png',
  },
];

const EquipmentSection = () => {
  return (
    <Equipment>
      <EquipmentHeader>
        Interested in our exciting iFit-enabled equipment?
      </EquipmentHeader>
      <EquipmentContainer>
        {equipment.map(({ title, img_src }) => {
          return (
            <EquipmentCard key={title}>
              <img src={img_src} alt={title} />
              <EquipmentTitle>{title}</EquipmentTitle>
            </EquipmentCard>
          );
        })}
      </EquipmentContainer>
    </Equipment>
  );
};

const Equipment = styled.section`
  max-width: 1440px;
  text-align: center;
  padding: 0 30px;
  margin: 50px auto;
`;

const EquipmentHeader = styled.h3`
  opacity: 0.8;
  color: #34383c;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 28px;
`;

const EquipmentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  justify-items: center;
  margin 0 auto;

  @media (max-width: 1439px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const EquipmentCard = styled.div`
  width: 95%;
  min-width: 220px;
  height: 330px;
  box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
  border-radius: 4px;
  background-color: #ffffff;
`;

const EquipmentTitle = styled.h1`
  opacity: 0.8;
  color: #2e3134;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 28px;
`;

export default EquipmentSection;
