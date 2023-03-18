import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import { CardMedia } from '@mui/material';

const Wrapper = styled('div', { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open, drawerwidth }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: 64,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: 0,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerwidth,
    }),
  })
);

export default function PersistentDrawerRight({ course, usedData }) {
  return (
    // <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    //   <CssBaseline />
    <Wrapper open={usedData.isOpen} drawerwidth={usedData.drawerWidth}>
      {/* <Typography variant="h6" component="p">
        Your course:
      </Typography> */}
      <CardMedia
        component="img"
        src={`${course.previewImageLink}/cover.webp`}
        width="100%"
        height="250px"
        // alt={title}
        style={{ display: 'block', objectFit: 'contain' }}
      />

      <Typography variant="h3" component="h2">
        "{course.title}"
      </Typography>
      <Typography align="justify" paragraph>
        {course.description}
      </Typography>
      <div
        style={{
          width: 750,
          height: 350,
        }}
      >
        <ReactPlayer
          url={`https://cors-proxy.fringe.zone/${course.lessons[0].link}`}
          playing
          loop
          muted={false}
          controls={true}
          width="100%"
          height="100%"
          // object-fit="cover"
          // light={`https://cors-proxy.fringe.zone/${course.lessons[0].previewImageLink}`}
        />
      </div>
    </Wrapper>
  );
}
