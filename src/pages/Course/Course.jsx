import React, { useEffect, useState } from 'react';
import PersistentDrawerRight from '../page';
import { getCourse } from '../../services/api/fetchApi';
import { useParams } from 'react-router-dom';

const Course = () => {
  const [courseData, setCourseData] = useState(null);
  const { courseId } = useParams();

  useEffect(() => {
    getCourse(courseId).then(response => setCourseData(response));
  }, [courseId]);

  console.log(courseData);

  return (
    <>
      {courseData && (
        <>
          <h2>{courseData.title}</h2>
          <PersistentDrawerRight course={courseData} />
        </>
      )}
    </>
  );
};

export default Course;
