// Mui
import { Avatar } from '@mui/material';
// SC
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  color: var(--theme-white);
  background: var(--theme-slack);
`;

export const HedaerSection = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 6px;
  border-color: lightgray;
  background: #421f44;
  color: gray;
`;

export const HeaderSearchInput = styled.input`
  min-width: 30vw;
  text-align: center;
  border: none;
  outline: 0;
  color: var(--theme-white);
  background: transparent;
`;
