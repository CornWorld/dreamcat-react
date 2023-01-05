import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TocContainer = styled(Box)(({theme}) => ({
    marginTop: '2rem',
    marginRight: '2.2rem',
    ul: {
        padding: 0,
        margin: 0,
        listStyle: 'none',
    },
    li: {
        li: {
            paddingLeft: '+10px',
        },
        transition: '0.1s',
        color: '#000000',
        'a:hover': {
            // color: '#575757',
            color: 'deep orange',
        }
    },
}));

const TocTypography = styled(Typography)(({theme}) => ({
    textDecorationColor: 'initial',
    borderLeftColor: 'transparent',
    textDecoration: 'none',
    alignItems: 'center',
    fontSize: '0.85rem',
    padding: '0px 8px 0px 10px',
    margin: '4px 0px 8px',
    fontWeight: 500,
    color: '#1A2027'
}));

export default function DreamCatToc() {
    const tocData = {
        type: 'root',
        sonNode: [
            {type: 'branch', title: '图床相关（其实是昨天的遗留问题）', sonNode: [
                    {type: 'leave', title: '开始折腾的缘由'},
                    {type: 'leave', title: '第一个问题'},
                    {type: 'leave', title: '弱智的挣扎'}
                ]
            },
            {type: 'branch', title: '尝试 Stable Diffusion web UI', sonNode: [
                    {type: 'leave', title: '安装小插曲'},
                    {type: 'leave', title: '我的产出图片保持为黑色块'},
                    {type: 'leave', title: '我不知道要更换模型'},
                    {type: 'leave', title: '精神攻击'},
                ]
            },
            {type: 'branch', title: '上周向老师请假的后续'},
            {type: 'branch', title: '后记'},
        ]
    };

    const dfs = (node: any) => {
        let ret: JSX.Element;
        const leave = (title: string = "", sonNode: JSX.Element[]=[]) => (<li>
            {title && <TocTypography href={'#' + title} component={'a'}>{title}</TocTypography>}
            {sonNode !== null && <ul>{sonNode}</ul>}
        </li>);

        if (node.type === 'leave' || (node.type === 'branch' && node.sonNode === undefined)) {
            // node.type='leave'; // Why should I fix an ub which seems never be trigger???
            ret = leave(node.title);
        } else if (node.type === 'branch') {
            ret = (leave(node.title, node.sonNode.map((item: any) => dfs(item))));
        } else {
            ret = <ul>{node.sonNode.map((item: any) => dfs(item))}</ul>;
        }
        return ret;
    }

    const clearAnchor=()=>{
        window.location.hash="";
    }

    return (<TocContainer>
        <Typography color={'inertial'} onClick={clearAnchor}>CONTENTS</Typography>
        <Typography>
            {dfs(tocData)}
        </Typography>
    </TocContainer>);
}