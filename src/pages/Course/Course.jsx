import React, { useEffect, useState } from 'react';
import PersistentDrawerRight from '../page';
import { getCourse } from '../../services/api/fetchApi';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import { useTheme } from '@mui/material';

const Course = () => {
  const [courseData, setCourseData] = useState(null);
  const { courseId } = useParams();

  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const drawerWidth = 340;

  useEffect(() => {
    getCourse(courseId).then(response => {
      console.log(response);
      setCourseData(response);
    });
  }, [courseId]);

  const usedData = {
    isOpen: open,
    handleDrawerOpen: handleDrawerOpen,
    handleDrawerClose: handleDrawerClose,
    drawerWidth: drawerWidth,
    theme: theme,
  };

  return (
    <>
      {courseData && (
        <>
          {/* <h2>{courseData.title}</h2> */}
          <SideBar course={courseData} usedData={usedData} />
          <PersistentDrawerRight course={courseData} usedData={usedData} />
        </>
      )}
    </>
  );
};

export default Course;
