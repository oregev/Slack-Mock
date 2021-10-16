// SC
import styled from 'styled-components';

export const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 8px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

export const SidebarOptionChannel = styled.h3`
  padding: 4px 0;
  font-weight: 300;
`;
