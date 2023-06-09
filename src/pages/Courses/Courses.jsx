import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CoursesList from '../../components/CoursesList/CoursesList';
import Hero from '../../components/Hero/Hero';
import Loader from '../../components/Loader/Loader';
import PaginationControlled from '../../components/Pagination/PaginationControlled';
import { getCoursesList } from '../../services/api/fetchApi';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [isCoursesLoading, setIsCoursesLoading] = useState(true);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  useEffect(() => {
    getCoursesList()
      .then(response => setCourses(response))
      .then(() => setIsCoursesLoading(false));
  }, []);

  const setPaginationPage = (event, value) => {
    setPage(value);
  };

  return (
    <section>
      <Hero />
      {isCoursesLoading && <Loader />}
      {courses && (
        <Container>
          <CoursesList courses={currentCourses} />
          <PaginationControlled
            totalPages={totalPages}
            currentPage={page}
            handleChange={setPaginationPage}
          />
        </Container>
      )}
    </section>
  );
};

export default Courses;
