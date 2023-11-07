import styled from 'styled-components';

export const Button = styled.button`
    color: #3470FF;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    border: none;
    background-color: #ffffff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
   margin: 100px auto 0
`;
export const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
 row-gap: 50px;
 column-gap:29px;
`;