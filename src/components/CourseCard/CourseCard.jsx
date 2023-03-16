import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CourseCard = ({ data }) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { title, previewImageLink, lessonsCount, rating, meta } = data;
  const { skills, courseVideoPreview } = meta;
  const hasVideo = courseVideoPreview !== undefined;

  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hasVideo && hovered ? (
        <ReactPlayer
          url={`https://cors-proxy.fringe.zone/${courseVideoPreview.link}`}
          playing={hovered}
          loop={hovered}
          muted={true}
          controls={false}
          width="100%"
          height="200px"
          object-fit="cover"
        />
      ) : (
        <CardMedia
          component="img"
          src={`${previewImageLink}/cover.webp`}
          width="100%"
          height="200px"
          alt={title}
          style={{ display: 'block' }}
        />
      )}

      <CardActions>
        <Button size="small" color="primary">
          View course
        </Button>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {lessonsCount} Lessons
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating}
        </Typography>

        {skills && (
          <CardActions disableSpacing style={{ padding: 0 }}>
            <Typography variant="h6" color="text.secondary">
              Skills
            </Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        )}
        {skills && (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <List>
                {skills.map(skill => (
                  <ListItem key={skill}>
                    <ListItemText
                      primary={skill}
                      // secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                ))}
              </List>
              {/* <Typography variant="body2" color="text.secondary" component="ul">
                {skills.map(skill => (
                  <li>{skill}</li>
                ))}
              </Typography> */}
            </CardContent>
          </Collapse>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;
