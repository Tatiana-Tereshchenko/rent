import styled from 'styled-components';

export const ImgCard = styled.img`
  width: 274px; 
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
width: 274px;
height: 426px;
`;

export const MainInfo = styled.div`
display: flex;
margin-top: 14px;
 margin-bottom: 8px;
 width: 274px;
 justify-content: space-between;

span {
    display: flex;
    color: #121417;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}
`;
export const BlurColor = styled.div`
color: #3470FF;
`;

export const List = styled.ul`
list-style: none;
display: flex;
color: #121417;
flex-wrap: wrap;
margin-bottom: 28px;
font-size: 12px;
  line-height: 18px;
  font-weight: 400;
width: 274px;
padding: 0px;
opacity: 0.5;
margin-top: 0px;


 & > li {
    position: relative;
    &:not(:last-child) {
      margin-right: 12px;
    }
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      display: block;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      height: 16px;
      top: 2px;
      right: -6px;
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonLearnMore = styled.button`
  width: 274px;
  height: 44px;
  border-radius: 12px;
  background-color: #3470FF;
  padding: 12px 99px;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  border: #3470FF;
`;
