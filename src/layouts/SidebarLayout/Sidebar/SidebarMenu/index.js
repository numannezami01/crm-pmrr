import { useContext,useState } from 'react';
import { useRouter } from 'next/router';

import {
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputBase from '@mui/material/InputBase';
import NextLink from 'next/link';
import { SidebarContext } from 'src/contexts/SidebarContext';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchBar = ({setSearchQuery}) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter a city name"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>
);


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);


const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1, 2)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(2)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: 157px;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);



function SidebarMenu() {
const data = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Berlin",
    "Buenos Aires",
    "Cairo",
    "Canberra",
    "Rio de Janeiro",
    "Dublin"
  ];

  const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
};
   const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  const { closeSidebar } = useContext(SidebarContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <MenuWrapper>
        
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        <List>
          <SubMenuWrapper>
            <List component="div">
              {/* Home */}
              <ListItem component="div">
                <NextLink href="/dashboards/home" passHref>
                  <Button
                    className={
                      currentRoute === '/dashboards/home' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    endIcon={<OtherHousesRoundedIcon />}
                  >
                    Home
                  </Button>
                </NextLink>
              </ListItem>
              {/* sales */}
              <ListItem  component="div">
                <Accordion
                sx={
                  {
                    background: '#12192A',
                    color: 'white',
                    width: '100%',
                    }

                }
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Sales</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    
                <NextLink href="/components/addNewPmr" passHref>
                  <Button
                    className={
                      currentRoute === '/components/addNewPmr' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<HowToVoteTwoToneIcon />}
                  >
                    Add New PMR
                  </Button>
                </NextLink>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
              {/* Account Setting */}
               <ListItem component="div">
                <Accordion
                sx={
                  {
                    background: '#12192A',
                    color: 'white',
                    width: '100%',
                    }

                }
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Account Settings</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                <NextLink href="/management/profile" component='div' passHref>
                  <Button
                    className={
                      currentRoute === '/management/profile' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<AccountCircleTwoToneIcon />}
                  >
                    My Profile
                  </Button>
                </NextLink>
 <NextLink href="/management/profile/settings" passHref>
                  <Button
                    className={
                      currentRoute === '/management/profile/settings'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<DisplaySettingsTwoToneIcon />}
                  >
                    Edit Account
                  </Button>
                </NextLink>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
              {/* Performance Tracking */}
              <ListItem component="div">
                <Accordion
                sx={
                  {
                    background: '#12192A',
                    color: 'white',
                    width: '100%',
                    }

                }
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Performance Tracking</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <NextLink href="/components/salesDashboard" passHref>
                  <Button
                    className={
                      currentRoute === '/components/salesDashboard' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<BallotTwoToneIcon />}
                  >
                    Sales Dashboard
                  </Button>
                </NextLink>
                
                  </AccordionDetails>
                </Accordion>
              </ListItem>
              {/* HR */}
               <ListItem component="div">
                <Accordion
                sx={
                  {
                    background: '#12192A',
                    color: 'white',
                    width: '100%',
                    }

                }
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>HR</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* HR policies */}
                   <NextLink href="/components/hrPolicies" passHref>
                  <Button
                    className={
                      currentRoute === '/components/hrPolicies' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<BeachAccessTwoToneIcon />}
                  >
                    HR Policies
                  </Button>
                </NextLink>
                    {/* My Team */}
                <NextLink href="/components/myTeam" passHref>
                  <Button
                    className={
                      currentRoute === '/components/myTeam' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<EmojiEventsTwoToneIcon />}
                  >
                    My Team
                  </Button>
                </NextLink>
                    {/* Exit Requistion */}
                    <NextLink href="/components/exitReq" passHref>
                  <Button
                    className={
                      currentRoute === '/components/exitReq' ? 'active' : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<FilterVintageTwoToneIcon />}
                  >
                    Exit Requistion
                  </Button>
                </NextLink>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
              {/* Reports */}
              <ListItem component="div">
                <Accordion
                sx={
                  {
                    background: '#12192A',
                    color: 'white',
                    width: '100%',
                    }

                }
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Reports</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    
                <NextLink href="/management/transactions" passHref>
                  <Button
                    className={
                      currentRoute === '/management/transactions'
                        ? 'active'
                        : ''
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<TableChartTwoToneIcon />}
                  >
                    All Reports
                  </Button>
                </NextLink>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        {/* Login page */}
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/" passHref>
                  <Button
                    className={currentRoute === '="/' ? 'active' : ''}
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={<DesignServicesTwoToneIcon />}
                  >
                    Login Page
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        
        
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
