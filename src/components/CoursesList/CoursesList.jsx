import { Container, Grid } from '@mui/material';
import React from 'react';
import CourseCard from '../CourseCard/CourseCard';

function CoursesList({ courses }) {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {courses.map(course => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <CourseCard data={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CoursesList;