import styled from 'styled-components';
import ImageHome from '../../assets/images/Roads_477555.jpg'

export const HomeContainer = styled.div`
  padding: 20px;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${ImageHome}); 
  background-size: cover;
  background-position: center;
  opacity: 0.7;
  z-index: -1; 
`;

export const HomeHeading = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  margin-top: -200px;
  color: black;
  font-weight: 500;
  text-align: center;
  z-index: 1; 
`;

export const HomeContent = styled.p`
  font-size: 20px;
  color: black;
  font-weight: 400;
  text-align: center;
  max-width: 600px;
  z-index: 1; 
`;