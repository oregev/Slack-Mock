// Mui
import CreateIcon from '@mui/icons-material/Create';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// SC
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 30%;
  max-width: 260px;
  color: var(--theme-white);
  background: var(--theme-slack);
  border-top: 1px solid #49274b;

  > hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #49274b;
  padding: 13px;
`;

export const SidebarInfo = styled.div`
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
    color: var(--theme-white);
  }
`;

export const StyledCreateIcon = styled(CreateIcon)`
  padding: 6px;
  color: #49274b;
  font-size: 18px;
  background: var(--theme-white);
  border-radius: 50%;
`;

export const StyledFiberManualRecordIcon = styled(FiberManualRecordIcon)`
  color: green;
  font-size: 12px;
  margin-top: 1px;
  margin-bottom: 2px;
`;

export const sidebarModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
