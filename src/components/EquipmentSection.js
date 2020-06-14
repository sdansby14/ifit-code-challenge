import React from 'react';
import styled from 'styled-components';

const EquipmentSection = () => {
  return (
    <Equipment>
      <h3>Interested in our exciting iFit-enabled equipment?</h3>
      <EquipmentContainer>
        <EquipmentCard>
          <img src="" alt="" />
        </EquipmentCard>
      </EquipmentContainer>
    </Equipment>
  );
};

const Equipment = styled.section`
  text-align: center;
  padding: 0 30px;
`;

const EquipmentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const EquipmentCard = styled.div`
  width: 330px;
  height: 330px;
  box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
  border-radius: 4px;
  background-color: #ffffff;
`;

export default EquipmentSection;
