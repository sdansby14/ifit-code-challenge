import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const MiddleSection = () => {
  const [ref, inView] = useInView({
    rootMargin: '100px',
  });
  return (
    <MiddleContainer ref={ref} inView={inView}>
      This should be in the middle!!!
    </MiddleContainer>
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

const animation = css`
  animation: 2s ${fadeIn} ease-out;
`;

const MiddleContainer = styled.section`
  width: 100%;
  height: 300px;
  margin-top: 700px;
  text-align: center;
  background-color: teal;
  margin-bottom: 700px;
  ${(props) => (props.inView ? animation : 'animation: none')};
`;

export default MiddleSection;
