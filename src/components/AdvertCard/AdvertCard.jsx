import React from 'react';
import {
    ImgCard,
    CardContainer,
    MainInfo,
    BlurColor,
    List,
    TextContainer,
    ButtonLearnMore,
} from '../AdvertCard/AdvertCard.styled';

const AdvertCard = ({ advert }) => {
    const { address } = advert; 
    const addressParts = address.split(', ');
    const country = addressParts[addressParts.length - 1];
    const city = addressParts[addressParts.length - 2]

  return (
    <CardContainer key={advert.id}>
          <ImgCard src={advert.img} alt={`${advert.make} ${advert.model}`} />
        <TextContainer>
          <MainInfo>
          <span>
            {advert.make} &nbsp; <BlurColor> {advert.model}</BlurColor>, {advert.year}
          </span>
              <span>{advert.rentalPrice}</span>
          </MainInfo>
          <List>
                    <li> {city}</li>
                    <li>{country}</li>
                    <li>{advert.rentalCompany}</li>
                    <li>{advert.type}</li>
                    <li>{advert.model}</li>
                    <li>{advert.id}</li>
                    <li>{advert.accessories?.[0]}</li>
            </List>
          </TextContainer>
            <ButtonLearnMore type="submit">Learn more</ButtonLearnMore>
    </CardContainer>
  );
};

export default AdvertCard;