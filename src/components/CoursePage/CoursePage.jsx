import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, CardMedia } from '@mui/material';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { Wrapper } from './CoursePage.styled';

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

      <Typography align="center" variant="h3" component="h2">
        "{course.title}"
      </Typography>
      <Typography align="justify" paragraph>
        {course.description}
      </Typography>
      <Box
        sx={{
          width: {
            lg: '750px',
          },
          height: {
            md: '350px',
          },
        }}
      >
        <VideoPlayer
          URL={`https://cors-proxy.fringe.zone/${
            course.lessons[usedData.lesson].link
          }`}
          muted={false}
        />
      </Box>
      <Typography variant="h4" component="h3">
        Lesson {course.lessons[usedData.lesson].order}: "
        {course.lessons[usedData.lesson].title}"
      </Typography>
    </Wrapper>
  );
};

export default CoursePage;
