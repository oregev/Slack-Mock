// Mui
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// Styles
import {
  HeaderContainer,
  HedaerSection,
  HeaderAvatar,
  HeaderSearch,
  HeaderSearchInput,
} from './Header.style';

export const Header = (): JSX.Element => (
  <HeaderContainer>
    <HedaerSection>
      <HeaderAvatar />
      <AccessTimeIcon />
    </HedaerSection>
    <HeaderSearch>
      <SearchIcon />
      <HeaderSearchInput placeholder="Search PAPAFEM" />
    </HeaderSearch>
    <HedaerSection style={{ justifyContent: 'flex-end' }}>
      <HelpOutlineIcon />
    </HedaerSection>
  </HeaderContainer>
);
