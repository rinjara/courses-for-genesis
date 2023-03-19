import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Lesson from '../Lesson/Lesson';
import { DrawerHeader } from './SideBar.styled';

function SideBar({ usedData, course, handleLessonsChange }) {
  const theme = useTheme();
  return (
    <>
      <Toolbar style={{ position: 'absolute', right: 8, top: 0, gap: 16 }}>
        <Typography
          variant="h6"
          noWrap
          sx={{
            flexGrow: 1,
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
          component="div"
        >
          Lessons
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={usedData.handleDrawerOpen}
          sx={{ ...(usedData.isOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            [theme.breakpoints.up('sm')]: {
              width: usedData.drawerWidth,
            },
            [theme.breakpoints.up('xs')]: {
              width: '100%',
            },
          },
        }}
        variant="persistent"
        anchor="right"
        open={usedData.isOpen}
      >
        <DrawerHeader>
          <IconButton onClick={usedData.handleDrawerClose}>
            {usedData.theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {course.lessons.map((lesson, index) => (
            <ListItem
              key={lesson.id}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Lesson
                index={index}
                lessonData={lesson}
                handleLessonsChange={handleLessonsChange}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default SideBar;
