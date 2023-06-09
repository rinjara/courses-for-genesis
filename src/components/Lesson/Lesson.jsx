import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import ReactPlayer from 'react-player';
import { Notify } from 'notiflix';

const Lesson = ({ lessonData, handleLessonsChange, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Typography gutterBottom variant="h5" component="h3">
        Lesson {lessonData.order}
      </Typography>
      <Card
        sx={{
          maxWidth: {
            lg: 345,
          },
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CardActionArea
          onClick={() => {
            if (lessonData.status === 'locked') {
              Notify.failure(
                'This lesson is locked. Please, follow the order!'
              );
              return;
            }
            handleLessonsChange(index);
          }}
        >
          <Box
            sx={{
              height: 150,
              maxWidth: {
                md: '300px',
              },
            }}
          >
            {hovered && lessonData.status !== 'locked' ? (
              <ReactPlayer
                url={`https://cors-proxy.fringe.zone/${lessonData.link}`}
                playing={hovered}
                loop={hovered}
                muted={true}
                controls={false}
                width="100%"
                height="100%"
              />
            ) : (
              <CardMedia
                component="img"
                width="100%"
                height="100%"
                image={`${lessonData.previewImageLink}/lesson-${lessonData.order}.webp`}
                alt={`lesson-${lessonData.order}`}
                style={{ display: 'block' }}
              />
            )}
          </Box>

          <CardContent>
            <Typography gutterBottom variant="h6" component="h4" align="center">
              "{lessonData.title}"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {lessonData.status}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Lesson;
