import React, { useEffect, useState } from 'react';
import PersistentDrawerRight from '../../components/CoursePage/CoursePage';
import { getCourse } from '../../services/api/fetchApi';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import { useTheme } from '@mui/material';

const Course = () => {
  const [courseData, setCourseData] = useState(null);
  const [open, setOpen] = useState(true);
  const [lessonNumber, setLessonNumber] = useState(0);
  const { courseId } = useParams();

  useEffect(() => {
    getCourse(courseId).then(response => {
      console.log(response);
      setCourseData(response);
    });
  }, [courseId]);

  const theme = useTheme();
  const drawerWidth = 340;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLessonsChange = function (lessonOrder) {
    setLessonNumber(lessonOrder);
  };

  const usedData = {
    isOpen: open,
    handleDrawerOpen: handleDrawerOpen,
    handleDrawerClose: handleDrawerClose,
    drawerWidth: drawerWidth,
    theme: theme,
    lesson: lessonNumber,
  };

  return (
    <>
      {courseData && (
        <>
          {/* <h2>{courseData.title}</h2> */}
          <SideBar
            course={courseData}
            usedData={usedData}
            handleLessonsChange={handleLessonsChange}
          />
          <PersistentDrawerRight course={courseData} usedData={usedData} />
        </>
      )}
    </>
  );
};

export default Course;
