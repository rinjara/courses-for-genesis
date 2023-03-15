import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

// function CourseCard({ data }) {
//   const [hovered, setHovered] = useState(false);

//   const { title, previewImageLink, lessonsCount, rating, meta } = data;
//   const { skills, courseVideoPreview } = meta;
//   //   console.log(`${previewImageLink}/cover.webp`);
//   //   console.log(courseVideoPreview.link);

//   return (
//     <Card
//       sx={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       {/* <Typography gutterBottom variant="h6" component="h2">
//         {title}
//       </Typography> */}
//       <CardMedia
//         component="img"
//         image={`${previewImageLink}/cover.webp`}
//         src="https://www.youtube.com/watch?v=dzOrUmK4Qyw&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=5"
//         // onMouseEnter={() => setHovered(true)}
//         // onMouseLeave={() => setHovered(false)}
//         // autoPlay={hovered}
//         // loop={hovered}
//         // muted={true}
//         // style={{ height: 0, paddingTop: '56.25%' }}
//         // sx={{
//         //   // 16:9
//         //   pt: '56.25%',
//         // }}
//         // alt="random"
//         // component={courseVideoPreview ? 'video' : 'img'}
//         // image={
//         //   courseVideoPreview
//         //     ? courseVideoPreview.link
//         //     : `${previewImageLink}/cover.webp`
//         // }
//         // src={courseVideoPreview ? courseVideoPreview.link : null}
//         // onMouseEnter={() => setHovered(true)}
//         // onMouseLeave={() => setHovered(false)}
//         // autoPlay={hovered}
//         // loop={hovered}
//         // muted={hovered}
//         // style={{ height: 0, paddingTop: '56.25%' }}
//         // component="img"
//         sx={{
//           // 16:9
//           pt: '56.25%',
//         }}
//         // alt="random"
//       />
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography gutterBottom variant="h5" component="h2">
//           {title}
//         </Typography>
//         <Typography>
//           This is a media card. You can use this section to describe the
//           content.
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">View</Button>
//         <Button size="small">Edit</Button>
//       </CardActions>
//     </Card>
//   );
// }

function CourseCard({ data }) {
  const [hovered, setHovered] = useState(false);

  const { title, previewImageLink, lessonsCount, rating, meta } = data;
  const { courseVideoPreview } = meta; //skills,
  const hasVideo = courseVideoPreview && courseVideoPreview.link !== undefined;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* {hasVideo && (
        <CardMedia
          component="iframe"
          src={courseVideoPreview.link}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          //   width="100%"
          //   height="auto"
          //   style={{ display: hovered ? 'block' : 'none' }}
          //   title={title}
          //   allowFullScreen
        />
      )} */}

      {hasVideo && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <ReactPlayer
            url={`https://cors-proxy.fringe.zone/${courseVideoPreview.link}`}
            playing={hovered}
            loop={hovered}
            muted={true}
            controls={false}
            light={`${previewImageLink}/cover.webp`}
            width="100%"
            height="100%"
          />
        </div>
      )}

      {/* {hasVideo ? (
        <CardMedia
          component="iframe"
          src={courseVideoPreview.link}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      ) : (
        <CardMedia component="img" src={previewImageLink} />
      )} */}

      {/* {hasVideo && (
        <CardMedia
          component="img"
          src={`${previewImageLink}/cover.webp`}
          width="100%"
          height="auto"
          alt=""
          style={{ display: hovered ? 'none' : 'block' }}
        />
      )} */}
      <CardActions>
        <Button size="small" color="primary">
          {hasVideo ? 'Watch video' : 'View course'}
        </Button>
      </CardActions>
      <CardContent
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {skills.join(', ')}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
          {lessonsCount} Lessons
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CourseCard;
