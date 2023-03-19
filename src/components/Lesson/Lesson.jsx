import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import ReactPlayer from 'react-player';

const Lesson = ({ lessonData, handleLessonsChange, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Typography gutterBottom variant="h5" component="h3">
        Lesson {lessonData.order}
      </Typography>
      <Card
        sx={{ maxWidth: 345 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CardActionArea
          onClick={() => {
            handleLessonsChange(index);
          }}
        >
          <Box sx={{ width: 300, height: 150 }}>
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
            <Typography gutterBottom variant="h6" component="h3" align="center">
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
