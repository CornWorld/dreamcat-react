import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import {alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {Button} from "@mui/material";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop: string) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const NavDivider=styled('div')(({theme})=>({
    color: 'inherit',
    width: '3ch'
}));

const drawerWidth = 240;

export default function DreamCatNav() {

    const navButtons=[
        {title: "首页", href: "/"},
        {title: "标签", href: "/tags"},
        {title: "时间轴", href: "/timeline"},
        {title: "链接", href: "/links"},
        {title: "关于", href: "/about"}
    ]

    return (
        <Box sx={{display: 'flex', marginBottom: '3ch'}}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        DreamCat
                    </Typography>
                    <NavDivider></NavDivider>
                    <Button
                        href={"/"}
                        disableElevation
                        color="inherit"
                    >
                        首页
                    </Button>
                    <Button
                        href={"/tags"}
                        color="inherit"
                    >
                        标签
                    </Button>
                    <Button
                        href={"/timeline"}
                        color="inherit"
                    >
                        时间轴
                    </Button>
                    <Button
                        href={"/links"}
                        color="inherit"
                    >
                        友链
                    </Button>
                    <Button
                        href={"/about"}
                        color="inherit"
                    >
                        关于
                    </Button>
                    <Box sx={{flexGrow: 1}}></Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>

    );
}