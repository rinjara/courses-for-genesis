import { Container, Grid } from '@mui/material';
import React from 'react';
import CourseCard from '../CourseCard/CourseCard';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function CoursesList() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map(card => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <CourseCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CoursesList;
