import React, { useEffect, useState } from 'react';
import CoursePage from '../../components/CoursePage/CoursePage';
import { getCourse } from '../../services/api/fetchApi';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import { useTheme } from '@mui/material';
import { load, save } from '../../services/localStorage/storage';

const Course = () => {
  const [courseData, setCourseData] = useState(null);
  const [open, setOpen] = useState(true);
  const [lessonNumber, setLessonNumber] = useState(0);
  const { courseId } = useParams();

  useEffect(() => {
    getCourse(courseId).then(response => {
      console.log(response);
      setCourseData(response);

      const lessonProgress = load('lessonProgress');
      if (lessonProgress) {
        if (Object.keys(lessonProgress).indexOf(courseId) !== -1) {
          setLessonNumber(lessonProgress[courseId]);
        }
      }
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
    const lessonProgress = load('lessonProgress') || {};
    lessonProgress[courseId] = lessonOrder;
    save('lessonProgress', lessonProgress);

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
          <SideBar
            course={courseData}
            usedData={usedData}
            handleLessonsChange={handleLessonsChange}
          />
          <CoursePage course={courseData} usedData={usedData} />
        </>
      )}
    </>
  );
};

export default Course;
