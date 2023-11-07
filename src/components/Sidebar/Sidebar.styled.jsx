import styled from 'styled-components';

export const SidebarBox = styled.ul`

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; 
  text-align: center;
  li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  li a {
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    font-weight: 400;
    border: 1px solid #6c788a;
    border-radius: 8px;
    width: 150px;
    height: 50px;
    margin-top: 25px;
    background-color: #3470FF;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  height: 100vh; 
`;