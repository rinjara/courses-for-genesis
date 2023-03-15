import React, { useEffect, useState } from 'react';
import CoursesList from '../../components/CoursesList/CoursesList';
import Hero from '../../components/Hero/Hero';
import { getCoursesList } from '../../services/api/fetchApi';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCoursesList().then(response => setCourses(response));
  }, []);

  return (
    <main>
      <Hero />
      {courses && <CoursesList courses={courses} />}
    </main>
  );
}

export default Courses;
