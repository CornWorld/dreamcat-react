import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TocContainer = styled(Box)(({theme}) => ({
    marginTop: '2rem',
    'ul': {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        listStyleImage: 'initial',
        'ul': {
            marginBlockStart: 0,
            marginBlockEnd: 0,
            '>li a': {
                paddingLeft: '+10px'
            }
        },
    },
    'li': {
        borderLeft: '1.2px solid transparent',
        boxSizing: 'border-box',
        '&:hover': {
            borderLeftColor: 'rgb(120,120,120)',
            color: 'rgb(208, 192, 167)',
        },
    }
}))

const TocTypography = styled(Typography)(({theme}) => ({
    textDecorationColor: 'initial',
    borderLeftColor: 'transparent',
    textDecoration: 'none',
    alignItems: 'center',
    fontSize: '0.9rem',
    padding: '0px 8px 0px 10px',
    margin: '4px 0px 8px',
    fontWeight: 500,
    color: '#1A2027'
}))

export default function DreamCatToc() {
    return (<TocContainer>
        <Typography color={'inertial'}>CONTENTS</Typography>
        <Typography>
            <ul>
                <li><TocTypography href={'#awa'} component={'a'}>awa</TocTypography></li>
                <li><TocTypography href={'#qwq'} component={'a'}>qwq</TocTypography></li>
                <li>
                    <TocTypography href={'#qwqSub'} component={'a'}>qwq</TocTypography>
                    <ul>
                        <li><TocTypography href={'#qaq'} component={'a'}>qaq</TocTypography></li>
                        <li><TocTypography href={'#qmq'} component={'a'}>qmq</TocTypography></li>

                    </ul>
                </li>
            </ul>
        </Typography>
    </TocContainer>);
}