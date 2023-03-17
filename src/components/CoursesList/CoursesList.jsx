import { Grid } from '@mui/material';
import React from 'react';
import CourseCard from '../CourseCard/CourseCard';

const CoursesList = ({ courses }) => {
  return (
    // <Container sx={{ py: 8 }} maxWidth="lg">
    <Grid container spacing={4} component={'ul'} sx={{ py: 8 }} maxWidth="lg">
      {courses.map(course => (
        <Grid item key={course.id} xs={12} sm={6} md={4} component={'li'}>
          <CourseCard data={course} />
        </Grid>
      ))}
    </Grid>
    // </Container>
  );
};

export default CoursesList;
