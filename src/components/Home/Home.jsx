import React from 'react';
import { HomeContainer, HomeHeading, HomeContent, HomeBackgroundImage } from '../Home/Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeBackgroundImage />
      <HomeHeading>Welcome to our car rental company! </HomeHeading>
      <HomeContent> We offer a wide range of rental cars to ensure you have an unforgettable journey. Our cars are clean, reliable, and always ready to embark on road adventures. Whether you're traveling for business or leisure, we will make every effort to ensure your trip is comfortable and safe. Join us and explore new horizons with our vehicles!</HomeContent>
    </HomeContainer>
  );
}

export default Home;