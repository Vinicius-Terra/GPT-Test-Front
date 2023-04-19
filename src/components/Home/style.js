import styled from "styled-components";

export const Ambient = styled.div`
  width: 100%;
  height: 100vh;
  background: #fafafa;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Top = styled.div`
  width: 80%;
  height: 100px;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Line = styled.div`
  width: 80%;
  height: 3px;
  background: gray;
  border-radius: 3px; 
`;

export const NavBox = styled.div`
  position: fixed;
  bottom: 30%;
  left: 10%;
`;