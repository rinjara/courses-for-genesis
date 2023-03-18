import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import ReactPlayer from 'react-player';
import { Box, CardMedia } from '@mui/material';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

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

const CoursePage = ({ course, usedData }) => {
  return (
    <Wrapper open={usedData.isOpen} drawerwidth={usedData.drawerWidth}>
      <CardMedia
        component="img"
        src={`${course.previewImageLink}/cover.webp`}
        width="100%"
        height="250px"
        alt={course.title}
        style={{ display: 'block', objectFit: 'contain' }}
      />

      <Typography variant="h3" component="h2">
        "{course.title}"
      </Typography>
      <Typography align="justify" paragraph>
        {course.description}
      </Typography>
      <Box
        style={{
          width: 750,
          height: 350,
        }}
      >
        <VideoPlayer
          URL={`https://cors-proxy.fringe.zone/${
            course.lessons[usedData.lesson].link
          }`}
          muted={false}
        />
        {/* <ReactPlayer
          url={`https://cors-proxy.fringe.zone/${
            course.lessons[usedData.lesson].link
          }`}
          playing
          loop
          muted={false}
          controls={true}
          width="100%"
          height="100%"
          // object-fit="cover"
          // light={`https://cors-proxy.fringe.zone/${course.lessons[0].previewImageLink}`}
        /> */}
      </Box>
      <Typography variant="h4" component="h4">
        Lesson {course.lessons[usedData.lesson].order}: "
        {course.lessons[usedData.lesson].title}"
      </Typography>
    </Wrapper>
  );
};

export default CoursePage;
