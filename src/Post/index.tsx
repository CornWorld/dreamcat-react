import * as React from 'react';
import DreamCatNav from '../component/Nav';
import DreamCatToc from '../component/Toc';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import {styled} from '@mui/material/styles';
import {Alert, Divider} from '@mui/material';
import Typography from '@mui/material/Typography';
import DreamCatInfoBar from "../component/InfoBar";

const Main = styled(Box)(({theme}) => ({
    overflowX: 'disabled',
    wordWrap: 'break-word',
    paddingTop: '2.3rem',
    paddingLeft: '6.0rem',
    paddingRight: '2rem'
}));

const PostAlertContainer = styled(Box)(({theme})=>({
    marginTop: '0.8rem',
    marginBottom: '1rem'
}));

const PostLabelContainer = styled(Box)(({theme})=>({
    div: {
        marginRight: '0.3rem'
    },
    marginTop: '0.3rem',
    marginBottom: '0.65rem'
}));

export default function DreamCatPost() {

    return (<div className={'post'}>
        <header>
            <DreamCatNav></DreamCatNav>
        </header>

        <Grid container spacing={3}>
            <Grid xs={10}>
                <Main>
                    <Typography variant='h3' component='h3' id={'postTitle'}>
                        Hello DreamCat
                    </Typography>

                    <PostLabelContainer>
                        <Chip avatar={<Avatar>C</Avatar>}  label='CornWorld' color={'primary'} size='small'  />
                        <Chip label='2022/12/27(最初发布)'  color={'primary'}  size='small' />
                        <Chip label='2022/12/27(最后修改)' color={'primary'}  size='small'  />
                    </PostLabelContainer>


                    <PostAlertContainer>
                        <Alert severity='warning'>
                            本文内容可能已经过时，最后修改于 <strong>十万年前</strong> !!!
                        </Alert>
                    </PostAlertContainer>


                    <Typography id={'postContent'}>
                        {((val: string) => {
                            for (let i = 1; i <= 1000; i++) val += 'awa';
                            return val;
                        })('')}
                    </Typography>
                </Main>
            </Grid>
            <Grid xs={2}>
                <DreamCatToc />
            </Grid>
        </Grid>
        <footer>
            <DreamCatInfoBar></DreamCatInfoBar>
        </footer>
    </div>);
}