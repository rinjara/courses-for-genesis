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
          maxWidth: {
            lg: '1000px',
          },
          height: {
            xs: '300px',
            sm: '450px',
            md: '350px',
          },
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
          },
          gap: {
            xs: '6px',
            sm: '6px',
            md: '5px',
          },
          alignItems: 'end',
          marginBottom: '25px',
        }}
      >
        <VideoPlayer
          URL={`https://cors-proxy.fringe.zone/${
            course.lessons[usedData.lesson].link
          }`}
          muted={false}
        />
        <div>
          <Typography variant="subtitle2" component="p">
            If you want to Increase playback speed - use combination "Ctrl +
            Shift + S "
          </Typography>
          <Typography variant="subtitle2" component="p">
            If you want to Decrease playback speed - use combination "Ctrl + S"
          </Typography>
        </div>
      </Box>
      <Typography variant="h4" component="h3">
        Lesson {course.lessons[usedData.lesson].order}: "
        {course.lessons[usedData.lesson].title}"
      </Typography>
    </Wrapper>
  );
};

export default CoursePage;
